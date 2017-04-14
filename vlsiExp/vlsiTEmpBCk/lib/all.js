(function(){
    function iframeCtrl($scope,$sce){
        $scope.videoFrame =$sce.trustAsResourceUrl("https://www.youtube.com/embed/jeKBMdYaM3U?rel=0&showinfo=0&autohide=1");
        $scope.main = "Videos on Using VGuru Verilog|VHDL";
        $scope.videos =[{"image":"https://img.youtube.com/vi/jeKBMdYaM3U/0.jpg",
                     "url":"https://www.youtube.com/embed/jeKBMdYaM3U?rel=0&showinfo=0&autohide=1",
                     "title":"FF8"
                    },
                    {"image":"https://img.youtube.com/vi/sgnO5fO46pE/0.jpg",
                     "url":"https://www.youtube.com/embed/sgnO5fO46pE?rel=0&showinfo=0&autohide=1",
                     "title":"Transformers"
                    },
                    {"image":"https://img.youtube.com/vi/0krawO0kMwQ/0.jpg",
                     "url":"https://www.youtube.com/embed/0krawO0kMwQ?rel=0&showinfo=0&autohide=1",
                     "title":"Apes"
                    },
                    {"image":"https://img.youtube.com/vi/SLD9xzJ4oeU/0.jpg",
                     "url":"https://www.youtube.com/embed/SLD9xzJ4oeU?rel=0&showinfo=0&autohide=1",
                     "title":"Hulk"
                    },
                    {"image":"https://img.youtube.com/vi/dh1RqnYi5hM/0.jpg",
                     "url":"https://www.youtube.com/embed/dh1RqnYi5hM?rel=0&showinfo=0&autohide=1",
                     "title":"Wolverine"
                    }];
        $scope.playVideo = function(link){
            console.log(link);
            $scope.videoFrame =$sce.trustAsResourceUrl(link);
        }
    }
    
    
    function carouselCtrl($scope){
        $scope.images =[{"image":"img/portfolio/fullsize/1.jpg",
                         "title":"Title 1",
                         "description":"Description 1"
                        },
                        {"image":"img/portfolio/fullsize/2.jpg",
                         "title":"Title 2",
                         "description":"Description 2"
                        },
                        {"image":"img/portfolio/fullsize/3.jpg",
                         "title":"Title 3",
                         "description":"Description 3"
                        },
                        {"image":"img/portfolio/fullsize/4.jpg",
                         "title":"Title 4",
                         "description":"Description 4"
                        },
                        {"image":"img/portfolio/fullsize/5.jpg",
                         "title":"Title 5",
                         "description":"Description 5"
                        }];
        $scope.loadCarousel=function(){
            $('.carousel').carousel()
        }
    }
    
    function servicesCtrl($scope){
        $scope.main ="At Your Service";
        $scope.services = [{"title":"Windows",
                            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus in magna fermentum, lobortis sagittis neque lacinia. Mauris mi ligula, gravida at neque quis, convallis imperdiet magna.",
                            "fontAwesome":"fa fa-4x fa-diamond text-primary sr-icons"
                           },
                           {"title":"Android Apps",
                            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus in magna fermentum, lobortis sagittis neque lacinia. Mauris mi ligula, gravida at neque quis, convallis imperdiet magna.",
                            "fontAwesome":"fa fa-4x fa-paper-plane text-primary sr-icons"
                           },
                           {"title":"IOS Apps","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus in magna fermentum, lobortis sagittis neque lacinia. Mauris mi ligula, gravida at neque quis, convallis imperdiet magna.",
                            "fontAwesome":"fa fa-4x fa-newspaper-o text-primary sr-icons"
                           },
                           {"title":"VLSI",
                            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus in magna fermentum, lobortis sagittis neque lacinia. Mauris mi ligula, gravida at neque quis, convallis imperdiet magna.",
                            "fontAwesome":"fa fa-4x fa-heart text-primary sr-icons"
                           }];
    }
    
    function clientsCtrl($scope){
        $scope.main ="VGuru is adopted at";
        $scope.images = ["https://upload.wikimedia.org/wikipedia/en/a/a2/Jawaharlal_Nehru_Technological_University,_Hyderabad_cover.jpg","https://getmyuni.azureedge.net/college-image/small/geethanjali-institute-of-science-and-technology-gist-nellore.jpg","https://media.licdn.com/mpr/mpr/shrink_200_200/p/6/005/03b/30d/0ac9195.png","http://static.learnof.com/learnof/ImageUploads/institute/logos/medium/3486_ShadanCollegeOfEngineeringAndTechnologySCET_1421476940_medium.png","https://educrib.com/logos/df91d0608f2fd0b7c7cc73428fab028flogologo.png","https://images.careers360.mobi/sites/default/files/styles/medium/public/2016/10/13/Vinayaka%20Mission%27s%20Kirupananda%20Variyar%20Engineering%20College%2C%20Salem_Logo.jpg?itok=IWb7Hp0t","https://upload.wikimedia.org/wikipedia/commons/c/c3/JKKN_.jpg"]
    }
    
    function aboutCtrl($scope){
        $scope.main = "VGURU";
        $scope.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus in magna fermentum, lobortis sagittis neque lacinia. Mauris mi ligula, gravida at neque quis, convallis imperdiet magna. Praesent a risus vitae quam porta suscipit quis nec turpis. Mauris massa augue, tempus a mollis id, dignissim a nunc. Duis mattis vitae ante vitae eleifend. Ut sagittis, urna at vulputate elementum, ipsum neque volutpat eros, vitae tempor nibh turpis sed dolor. Fusce elementum turpis eu ex consequat ultrices. Praesent eleifend lacus in blandit dictum. Sed eget facilisis diam. Nam id justo dolor. Suspendisse tristique laoreet ligula id hendrerit. Phasellus ultrices pulvinar ex ut mattis. Etiam eget nulla nulla.";
        $scope.windowsBtn = "VGuru Verilog|VHDL for Windows";
        $scope.androidBtn = "VGuru Verilog|VHDL for Android";
    }
    
    function contactCtrl($scope){
        $scope.main = "Let's Get In Touch!";
        $scope.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque risus in magna fermentum, lobortis sagittis neque lacinia.";
        $scope.contactDetails = [{"place":"Bangalore",
                           "generalPhone":"+91 901-919-1204",
                           "salesPhone":"+91 934-210-7608",
                           "address":"101, Meenakshi Enclave,13th F Main, HAL\u00A02nd\u00A0Stage,Bangalore - 560008",
                           "generalMail":"vguruhelp@skandvlsi.com",
                           "salesMail":"sales@skandvlsi.com",
                           "fAPhone":"fa fa-phone fa-3x sr-contact",
                           "fAMap":"fa fa-map-marker fa-3x sr-contact",
                           "fAMail":"fa fa-envelope-o fa-3x sr-contact",
                           "bootstrap":"col-lg-4 text-center col-lg-offset-2"
                          },
                          {"place":"Hyderabad",
                           "generalPhone":"+91 901-919-1204",
                           "salesPhone":"+91 934-210-7608",
                           "address":"101, Meenakshi Enclave,13th F Main, HAL\u00A02nd\u00A0Stage,Bangalore - 560008",
                           "generalMail":"vguruhelp@skandvlsi.com",
                           "salesMail":"sales@skandvlsi.com",
                           "fAPhone":"fa fa-phone fa-3x sr-contact",
                           "fAMap":"fa fa-map-marker fa-3x sr-contact",
                           "fAMail":"fa fa-envelope-o fa-3x sr-contact",
                           "bootstrap":"col-lg-4 text-center"
                          }];
    }
    
    function footerCtrl($scope){
        $scope.copyRight = "Copyright \u00A9 skand VLSI.All Rights Reserved.";
        $scope.socialNetworks = [{"url":"https://www.facebook.com/VGuruAndroid",
                                  "icon":"fa fa-3x fa-facebook"
                                 },
                                 {"url":"https://twitter.com/VGuruAndroid",
                                  "icon":"fa fa-3x fa-twitter"
                                 },
                                 {"url":"https://www.linkedin.com/company/skand-vlsi",
                                  "icon":"fa fa-3x fa-linkedin"
                                 }];
    }
    
    function navbarCtrl($scope){
        $scope.navItems = ["about","videos","services","clients","contact"];
        $scope.brand ="Skand VLSI"
    }
    
    
    angular.module("VLSI",[])
           .controller("iframeCtrl",["$scope","$sce",iframeCtrl])
           .controller("carouselCtrl",["$scope",carouselCtrl])
           .controller("servicesCtrl",["$scope",servicesCtrl])
           .controller("clientsCtrl",["$scope",clientsCtrl])
           .controller("aboutCtrl",["$scope",aboutCtrl])
           .controller("contactCtrl",["$scope",contactCtrl])
           .controller("footerCtrl",["$scope",footerCtrl])
           .controller("navbarCtrl",["$scope",navbarCtrl])
})();
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    /* $(document).ready(function() {  
  		 $(".carousel-inner").swiperight(function() {  
    		  $(this).parent().carousel('prev');  
	    		});  
		   $(".carousel-inner").swipeleft(function() {  
		      $(this).parent().carousel('next');  
	   });  
	}); 
*/
    
})(jQuery); // End of use strict

/*!
 * Start Bootstrap - Creative v3.3.7+1 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
!function(a){"use strict";a(document).on("click","a.page-scroll",function(e){var l=a(this);a("html, body").stop().animate({scrollTop:a(l.attr("href")).offset().top-50},1250,"easeInOutExpo"),e.preventDefault()}),a("body").scrollspy({target:".navbar-fixed-top",offset:51}),a(".navbar-collapse ul li a").click(function(){a(".navbar-toggle:visible").click()}),a("#mainNav").affix({offset:{top:100}}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),a(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery);
