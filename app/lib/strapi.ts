export async function getStrapiData(url: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
    if (!response.ok) {
      throw new Error(`HTTP ERROR: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do Strapi:", error);
    throw error;
  }
}
