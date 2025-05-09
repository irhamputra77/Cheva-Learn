export default function DashboardPage() {
    return (
        <>
            <main>
                <section class="relative h-screen w-full overflow-hidden">
                    <img class="w-full h-full object-cover absolute top-0 left-0 z-0" src="https://image.tmdb.org/t/p/original/15IZl405E664QDVxpFJBl7TtLmw.jpg" alt="minions" />
                    <div class="absolute inset-0 bg-black opacity-70 flex items-center z-10">
                        <div class="text-white px-10 max-w-2xl">
                            <h2 class="text-4xl font-bold mb-2">minions</h2>
                            <p class="mb-1">📅 Year: 2015</p>
                            <p class="mb-4">Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.</p>
                            <button class="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 font-bold">See Detail</button>
                        </div>
                    </div>
                </section>
                <section class="bg-blue-900 text-white py-10">
                    <div class="max-w-6xl mx-auto px-4">
                        <h2 class="text-2xl font-bold mb-6 text-center">Trending Movies</h2>
                        <div class="flex flex-wrap justify-center gap-6">
                            <div class="max-w-xs relative rounded overflow-hidden">
                                <img src="https://image.tmdb.org/t/p/original/yEczguvMSFJRuUiOFgWXsZG3CsG.jpg" alt="Wonder Woman" class="w-full h-auto object-cover"></img>
                                <div className="absolute bottom-0 px-3 pb-3">
                                    <h3 className="text-white font-bold text-xl">Wonder Woman</h3>
                                    <p className="text-slate-200 text-sm font-medium">📅Year: 2017</p>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-xs relative rounded overflow-hidden">
                                <img src="https://image.tmdb.org/t/p/original/30c5jO7YEXuF8KiWXLg9m28GWDA.jpg" alt="Deadpool" class="w-full h-auto object-cover"></img>
                                <div className="absolute bottom-0 px-3 pb-3">
                                    <h3 className="text-white font-bold text-xl">Deadpool</h3>
                                    <p className="text-slate-200 text-sm font-medium">📅Year: 2016</p>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div class="max-w-xs relative rounded overflow-hidden">
                                <img src="https://image.tmdb.org/t/p/original/iL8mukexAqEg0xK783rG561tdd8.jpg" alt="GOTG" class="w-full h-auto object-cover"></img>
                                <div className="absolute bottom-0 px-3 pb-3">
                                    <h3 className="text-white font-bold text-xl">Guardian of the Galaxy Vol. 2</h3>
                                    <p className="text-slate-200 text-sm font-medium">📅Year: 2017</p>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}