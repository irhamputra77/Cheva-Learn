export default function Hero() {
    return (
        <>
            <main class="flex justify-between py-16">
                <div class="flex flex-col place-content-center mx-auto">
                    <h1 class="text-[100px] leading-none">Human<br />stories & ideas</h1>
                    <p class="text-3xl py-12">A place to read, write, and deepen your understanding</p>
                    <button class=" bg-black text-3xl text-white py-3 w-70 rounded-full">Start Reading</button>
                </div>
                <img class="w-md h-md" src="src\assets\hero-image.png" alt="hero-image"></img>
            </main>
        </>
    )
}