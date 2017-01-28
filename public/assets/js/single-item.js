function matchSize () {

  if(Modernizr.mq('(min-width: 992px)')) {
    let rightHeight1 = $('.right-col').outerHeight();
    console.log("right 1 :", rightHeight1);
    let rightHeight2 = $('.story-detail').height();
    console.log("right 2 :", rightHeight2);
    let rightHeight = rightHeight1 + rightHeight2;
    console.log("right :",rightHeight);
    let leftHeight = $('.left-col').outerHeight();
    console.log("left :",leftHeight);
    rightHeight>leftHeight ? $('.left-col').css({'min-height':rightHeight+'px'}) : $('.story-detail').css({'min-height' : (leftHeight-rightHeight1)+'px'})
  }
  else {
    $('.left-col').css({
      'min-height': '67rem'
    })
  }
}
matchSize();
$(window).resize(matchSize);
