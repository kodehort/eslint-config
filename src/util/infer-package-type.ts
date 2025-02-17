import { readFile } from 'node:fs/promises'
import path from 'node:path'

import { glob } from 'glob'

export const inferPackageTypes = async (): Promise<PackageTypesArray> => {
  const packageTypes: PackageTypesSet = {
    browserPackages: new Set<string>(),
    nodePackages: new Set<string>(),
  }
  const packageFiles = await glob('**/package.json', {
    ignore: 'node_modules/**',
  })
  for (const packageFile of packageFiles) {
    const packagePath = path.dirname(packageFile)
    const packageType = await inferPackageType(packageFile)
    packageTypes[packageType].add(packagePath)
  }
  return {
    browserPackages: [...packageTypes.browserPackages],
    nodePackages: [...packageTypes.nodePackages],
  }
}

const inferPackageType = async (packagePath: string): Promise<PackageType> => {
  const content = await readFile(packagePath, 'utf8')
  const pkg = JSON.parse(content) as PackageJson
  return containsDependencies(pkg, 'solid-js') ||
    containsDependencies(pkg, 'astro')
    ? 'browserPackages'
    : 'nodePackages'
}

const containsDependencies = (pkg: PackageJson, dependency: string): boolean =>
  Boolean(
    pkg.dependencies?.[dependency] ||
      pkg.devDependencies?.[dependency] ||
      pkg.peerDependencies?.[dependency],
  )

export type PackageType = 'browserPackages' | 'nodePackages'

export type PackageTypesSet = {
  [K in PackageType]: Set<string>
}

export type PackageTypesArray = {
  [K in PackageType]: Array<string>
}

type PackageJson = {
  exports?: Record<string, string>
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}
