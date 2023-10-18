<x-layout>
    @if (session()->has('access.denied'))
        <div>
            <div class="text-center mt-5">
                <h3 class="text-decoration-underline">{{ session()->get('access.denied') }}</h3>
            </div>
        </div>
    @endif
    @if (session()->has('send.ok'))
    <div>
        <div class="text-center mt-5">
            <h3 class="text-decoration-underline">{{ session()->get('send.ok') }}</h3>
        </div>
    </div>
@endif
    <x-header />

    <div class="container col-xxl-8 px-4 py-5">
        <hr class="my-4"/>
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div>
                    <a>
                        <h2 class="post-title">Ecco le ultime carte aggiunte da altri utenti!</h2>
                        <h3 class="post-subtitle">Che testo mettiamo?</h3>
                    </a>
                </div>

                {{-- buttaci dentro le carte --}}
                <div class="container">
                    <div class="row">
                        @foreach ($announcements as $announcement)
                            <div class="col-12 col-md-4 col-lg-3 mx- my-5 mb-md-0">
                                <div class="item">
                                    <img src="assets/images/yugioh (1).jpg" class="img-fluid product-thumbnail">
                                    <h5 class="">{{ $announcement->title }}</h5>
                                    <p class="price">{{ $announcement->price }}€</p>
        
                                    <span class="icon-cross">
                                        <a href="{{ route('announcements.show', $announcement->uri) }}"><img
                                                src="assets/images/cross.svg" class="img-fluid"></a>
                                    </span>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>


    {{-- sezione da testare  --}}
    <div class="container col-xxl-8 px-4 py-5">
        <hr class="my-4"/>
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-lg-6">
                {{-- <h1 class="display-5 fw-bold lh-1 mb-3">Quale titolo?</h1> --}}
                <p class="lead">É il tuo bazar online per appassionati di carte da gioco. Scopri una vasta selezione di carte da collezione, mazzi personalizzati e accessori per migliorare la tua esperienza di gioco. Trova le carte più rare e cerca tra le offerte esclusive. Soddisfa la tua sete di strategia e competizione con CardBazaar.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    {{-- <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> --}}
                </div>
            </div>
            <div class="col-10 col-sm-8 col-lg-6">
                <img src="/assets/images/mix_cards.jpg" class="d-block mx-lg-auto img-fluid" alt="Mixed Cards"
                    width="600" height="500" loading="lazy">
            </div>
        </div>
        <hr class="my-4"/>
    </div>

    {{-- VECCHIA SEZIONE CON LE CARTE --}}
    {{-- <div class="section">
        <div class="container">
            <div class="row">
                @foreach ($announcements as $announcement)
                    <div class="col-12 col-md-4 col-lg-3 mx- my-5 mb-md-0">
                        <div class="item">
                            <img src="assets/images/yugioh (1).jpg" class="img-fluid product-thumbnail">
                            <h5 class="">{{ $announcement->title }}</h5>
                            <p class="price">{{ $announcement->price }}€</p>

                            <span class="icon-cross">
                                <a href="{{ route('announcements.show', $announcement->uri) }}"><img
                                        src="assets/images/cross.svg" class="img-fluid"></a>
                            </span>
                        </div>
                    </div>
                @endforeach
                <div class="wrapper container">
                        <div class="cardHome text-center col-1">
                            <div class="image"> <img src="assets/images/yugioh (3).jpg" width="220"> </div>
                            <div class="pr-3 about-product">
                                <h3>{{ $announcement->title }}</h3>
                                <h4>{{ $announcement->price }}</h4> <button href="{{ route('announcements.show', $announcement->uri) }}" class="btn btn-primary buy-now">Prova</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div> --}}

</x-layout>
