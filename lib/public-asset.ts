import assets from './public-assets.json';

/** Mantém os recursos opcionais sem gerar URLs para arquivos ausentes. */
export function publicAsset(path: string): string | undefined {
  return assets.includes(path) ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}` : undefined;
}
