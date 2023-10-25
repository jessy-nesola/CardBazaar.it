<footer class="pt-4 shadow-lg border-footer">
		<div class="container">
	  <div class="row">

		<div class="col-6 col-md-2 mb-3">
			<h5 class="text-light">{{__('custom.foot1')}}</h5>
			<ul class="nav flex-column">
			  <li>
				  <x-_locale lang='it' nation="{{__('custom.foot2')}}" />
				  <x-_locale lang='en' nation="{{__('custom.foot3')}}" />
				  <x-_locale lang='es' nation="{{__('custom.foot4')}}" />
			  </li>
			</ul>
		  </div>

		<div class="col-6 col-md-2 mb-3">
		  <h5 class="text-light">{{__('custom.foot5')}}</h5>
		  <ul class="nav flex-column">
			<li class="nav-item mb-2"><a href="{{route('homepage')}}" class="nav-link p-0 text-white-50">{{__('custom.foot6')}}</a></li>
			<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white-50">{{__('custom.foot7')}}</a></li>
			<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white-50">{{__('custom.foot8')}}</a></li>
			<li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white-50">{{__('custom.foot9')}}</a></li>
		  </ul>
		</div>

		 <div class="col-6 col-md-2 mb-3">
			{{--<h5 class="text-light">LAVORA CON NOI</h5>
			<ul class="nav flex-column">
			  @if (Auth::user() && !Auth::user()->is_revisor)
			  <li><a href="{{ route('workWithUs') }}" class="text-white-50 text-decoration-none">Lavora con noi</a>
			  </li>
			  @endif
			</ul> --}}
		  </div>
  
		<div class="col-md-5 offset-md-1 mb-3">
		  <form>
			<h3 class="text-light">CardBazaar.</h3>
			<p class="text-white-50">{{__('custom.foot10')}}</p>
			<hr style="color: white">
			<p class="text-white-50">{{__('custom.foot11')}}</p>
			<p class="text-white-50">{{__('custom.foot12')}}</p>
			<p class="text-white-50">info@cardbazaar.it</p>
		  </form>
		</div>
	  </div>
  
	  <hr style="color: white">

	  <div class="d-flex flex-column flex-sm-row justify-content-between py-1 my-4">
		<p class="text-white-50">Copyright &copy; Designed by DevelHopers, 2023</p>
	  </div>
	</div>
	</footer>
  
{{-- <footer class="deneb_footer">
	<div class="widget_wrapper" style="background-image: url(http://demo.tortoizthemes.com/deneb-html/deneb-ltr/assets/images/footer_bg.png);">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-12">
					<div class="widget widegt_about">
						<div class="widget_title">
							<img src="assets/images/logo_1.png" class="img-fluid" alt="">
						</div>
						<h2>CardBazaar.</h2>
						<ul class="social">
							<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
							<li><a href="#"><i class="fab fa-twitter"></i></a></li>
							<li><a href="#"><i class="fab fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="widget widget_link">
						<div class="widget_title">
							<h4>Links</h4>
						</div>
						<ul>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Portfolio</a></li>
							<li><a href="#">Blog</a></li>
						</ul>
					</div>
				</div>
				
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="widget widget_contact">
						<div class="widget_title">
							<h4>Contact Us</h4>
						</div>
						<div class="contact_info">
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-phone-alt"></i>
								</div>
								<div class="info">
									<p><a href="tel:+919246147999">1800-121-3637</a></p>
									<p><a href="tel:+919246147999">+91 924-614-7999</a></p>
								</div>
							</div>
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-envelope"></i>
								</div>
								<div class="info">
									<p><a href="mailto:info@deneb.com">info@deneb.com</a></p>
									<p><a href="mailto:services@deneb.com">services@deneb.com</a></p>
								</div>
							</div>
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-map-marker-alt"></i>
								</div>
								<div class="info">
									<p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
	<div class="copyright_area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="copyright_text">
						<p class="">Copyright &copy; designed by develHOPErs, 2023</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer> --}}
