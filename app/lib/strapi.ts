export async function getStrapiData(url: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured");
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${baseUrl}${url}`, {
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP ERROR: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do Strapi:", error);
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
