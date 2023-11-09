const Instagram = () => {
    const instaImages = [
        "https://i.ibb.co/GsCBJmB/Image.png",
        "https://i.ibb.co/DWzX5K3/Image.png",
        "https://i.ibb.co/d7ZsghY/Image.png",
        "https://i.ibb.co/5nx8hpJ/Image.png",
        "https://i.ibb.co/RPcFHQQ/Image.png",
        "https://i.ibb.co/HHVPQPL/Image.png",
        "https://i.ibb.co/TkPFtNZ/Image.png",
        "https://i.ibb.co/3Rf4fPt/Image.png",
        "https://i.ibb.co/yWHs9zC/Image.png",
        "https://i.ibb.co/VH4tq4B/Image.png"
    ]
    return (
        <section className="my-12">
            <h2 className="text-4xl font-bold divider my-16">Instagram</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {
                    instaImages.map(image => <img key={image} src={image} className="w-full max-h-full rounded-md+" />)
                }
            </div>
        </section>
    );
};

export default Instagram;