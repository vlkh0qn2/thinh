// JavaScript Document
$(document).ready(function () {
                            $("#slider").ezPlus({
                                gallery: 'gallery_01',
                                cursor: 'pointer',
                                galleryActiveClass: "active",
                                imageCrossfade: true,
                                loadingIcon: "https://www.elevateweb.co.uk/spinner.gif"
                            });

                            $("#slider").bind("click", function () {
                                var ez = $('#slider').data('ezPlus');
                                ez.closeAll(); //NEW: This function force hides the lens, tint and window
                                $.fancyboxPlus(ez.getGalleryList());
                                return false;
                            });

                        });