export async function GET() {
    const accessKey = import.meta.env.UNSPLASH_ACCESS_KEY;
    
    try {
        const response = await fetch(
            `https://api.unsplash.com/users/filipsteficar/photos?per_page=40&stats=true`,
            {
                headers: { Authorization: `Client-ID ${accessKey}` }
            }
        );
        
        if (!response.ok) {
            return new Response(JSON.stringify({ error: 'Failed To Fetch Photos' }), {
                status: response.status,
            });
        }
        
        const photos = await response.json();
        return new Response(JSON.stringify(photos), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Server Error' }), {
            status: 500,
        });
    }
}