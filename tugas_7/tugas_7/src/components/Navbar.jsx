export default function Navbar() {
    return (
        <>
            <header class="border-b">
                <div class="max-w-[1250px] mx-auto py-4.5 flex item-center justify-between px-4">
                    <h1 class="font-bold text-3xl">medium</h1>

                    <div class="flex space-x-5 items-center">
                        <nav class="space-x-6 text-sm">
                            <a href="/" class="hidden md:inline-block">Our Story</a>
                            <a href="/" class="hidden md:inline-block">Membership</a>
                            <a href="/" class="hidden md:inline-block">Write</a>
                            <a href="/" class="hidden md:inline-block">Sign in</a>
                        </nav>
                        <button class="bg-black text-white text-sm py-2.5 px-4.5 rounded-full font-semibold">Get started</button>
                    </div>
                </div>
            </header>
        </>
    )
}