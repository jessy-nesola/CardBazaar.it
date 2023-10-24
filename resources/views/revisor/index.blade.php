<x-layout>
    <div style="margin:80px;"></div>
    <div class="row justify-content-between gy-4 mt-3 px-1">

        <section id="gallery-single" class="gallery-single d-flex flex-column">

            <div class="container">
                @if (session()->has('message'))
                    <div class="row">
                        <div class="col-12 text-center mb-5">
                            <h3>{{ session()->get('message') }}</h3>
                        </div>
                    </div>
                @endif
                <div class="row">
                    <div class="col-12 text-center mb-5">
                        <h2>
                            {{ $announcement_to_check ? 'Annuncio da revisionare' : 'Non ci sono annunci da revisionare' }}
                        </h2>
                    </div>
                </div>
                @if ($announcement_to_check)
                    <div class="row justify-content-center gy-2 mt-3 px-1" style="width:100%;">
                        <div id="carousel-show" class="carousel carousel-dark slide">
                            @if ($announcement_to_check->images)
                                @foreach ($announcement_to_check->images as $image)
                                {{-- <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carousel-show" data-bs-slide-to="0"
                                         class="active" aria-current="true" aria-label="Slide 1"></button>
                                </div> --}}
                                <div class="carousel-inner">
                                    <div class="carousel-item @if($loop->first) active @endif">
                                        <img src="{{Storage::url($image->path)}}" class=" w-100"
                                            style="height: 300px; width: 120px; object-fit:contain;" alt="...">
                                    </div>
                                </div>
                                @endforeach
                            @else
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/assets\images\card-1.png" class=" w-100"
                                            style="height: 300px; width: 120px; object-fit:contain;" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/assets\images\card-2.png" class=" w-100"
                                            style="height: 300px; width: 120px; object-fit:contain;" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/assets\images\card-3.png" class=" w-100"
                                            style="height: 300px; width: 120px; object-fit:contain;" alt="...">
                                    </div>
                                </div>
                            @endif

                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-show"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carousel-show"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div class="row justify-content-center mt-5">
                            <form class=" col-4 d-flex justify-content-end"
                                action="{{ route('revisor.accept_announcement', ['announcement' => $announcement_to_check]) }}"
                                method="POST">
                                @csrf
                                @method('PATCH')
                                <button type="submit" class="btn btn-celeste">Accetta</button>
                            </form>
                            <form class=" col-4"
                                action="{{ route('revisor.reject_announcement', ['announcement' => $announcement_to_check]) }}"
                                method="POST">
                                @csrf
                                @method('PATCH')
                                <button type="submit" class="btn btn-celeste">Rifiuta</button>
                            </form>
                        </div>

                        <div class="col-12 my-5 d-flex justify-content-center">
                            <div class="card-description mx-2">
                                <h2 class="mb-3">{{ $announcement_to_check->title }}</h2>
                                <div><strong>Categoria: <a
                                            href="{{ route('categories.show', ['name' => $announcement_to_check->category->name]) }}">{{ $announcement_to_check->category->name }}</a></strong>
                                </div>
                                <div><strong>Pubblicato da: {{ $announcement_to_check->user->name }}</strong></div>
                                <div class="mb-3"><strong>Data pubblicazione:
                                        {{ $announcement_to_check->created_at->format('d/m/Y') }}</strong></div>
                                <div><strong>Descrizione:</strong></div>
                                <p class="mb-4">{{ $announcement_to_check->body }}</p>
                                <h5><strong>{{ $announcement_to_check->price }}€</strong></h5>
                                {{-- <p><a href="{{ route('register') }}" class="btn btn-warning me-2">Contatta il venditore</a> --}}
                            </div>
                        </div>

                    </div>
            </div>
            @endif
    </div>
    </section>
    {{-- <div class="testimonial-item">
                    <p>
                        <i class="bi bi-quote quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                        cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet
                        legam anim culpa.
                        <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                    <div>
                        <img src="/assets/images/person_3.jpg" class="testimonial-img" alt="">
                        <h4>Note del venditore</h4>
                    </div>
                </div> --}}
    </div>
</x-layout>
