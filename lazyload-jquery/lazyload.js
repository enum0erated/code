$(document).ready(function() {
    // lazy load images
    var lazyElements = $('.the_image.lazy');

    if ('IntersectionObserver' in window) {
        let lazyObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyElement = $(entry.target);

                    if (lazyElement.is('div')) {
                        lazyElement.css('background-image', 'url(' + lazyElement.data('bg') + ')');
                    } else if (lazyElement.is('img')) {
                        lazyElement.attr('src', lazyElement.data('src'));
                    }

                    lazyElement.removeClass('lazy').addClass('lazyloaded');
                    lazyObserver.unobserve(entry.target);
                }
            });
        });

        lazyElements.each(function() {
            lazyObserver.observe(this);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        lazyElements.each(function() {
            let lazyElement = $(this);

            if (lazyElement.is('div')) {
                lazyElement.css('background-image', 'url(' + lazyElement.data('bg') + ')');
            } else if (lazyElement.is('img')) {
                lazyElement.attr('src', lazyElement.data('src'));
            }

            lazyElement.removeClass('lazy').addClass('lazyloaded');
        });
    }
});
