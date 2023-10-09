<script>
    import { page } from "$app/stores";

    let slides = [
        "/sadcat.gif",
        "/sadcat1.jpg",
        "/sadcat3.jpg",
        "/sadcat2.jpg",
    ];
    let slide_num = 0;

    function nextSlide() {
        slide_num > slides.length - 1 ? (slide_num = 0) : slide_num++;
    }

    function prevSlide() {
        slide_num < 1 ? (slide_num = slides.length - 1) : slide_num--;
    }
</script>

<div class="mx-4 md:container space-y-6">
    <h1 class="text-5xl font-bold my-4">
        {$page.status && $page.status > 299 ? `${$page.status}: ` : ""}{$page
            .error?.message || "Unknown Error"}
    </h1>

    <div class="carousel w-full">
        <div class="carousel-item relative w-full">
            <img src={slides[slide_num]} alt="Sad Cat" class="w-full" />
            <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
                <button class="btn btn-circle" on:click={nextSlide}>❮</button>
                <button class="btn btn-circle" on:click={prevSlide}>❯</button>
            </div>
        </div>
    </div>
</div>
