/* The following code will open a description about an article if it is clicked.
 *
 * Additionally, the 'o' keypress event will toggle the desc. to show/hide, and
 * the 'n' keypress will move to the next article (child).
 */
var main = function() {
    $('.article').click(function() {
        $('.article').removeClass('current'); // unhighlight all other articles
        $('.description').hide(); // hides all descriptions
        
        $(this).addClass('current'); // highlight only the current article
        $(this).children('.description').show(); // show only the current desc.
    });
        
    $(document).keypress(function(event) {
      if(event.which === 111) { // 'o'
        $('.current').children('.description').toggle();
      } 
      else if(event.which === 110) { // 'n'
        var currentArticle = $('.current');
        var nextArticle = currentArticle.next();
        
        currentArticle.removeClass('current');
        nextArticle.addClass('current');
      }
    });
}
    
$(document).ready(main);