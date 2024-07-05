function t396_scaleBlock(e){var t,d,a,l,u=t396_isOnlyScalableBrowser(),p=t396_detectResolution(e),o=document.getElementById("rec"+e);o&&(t=t396_scale__getElementsToScale(o),(o=o.querySelector(".t396__artboard"))&&0!==t.length&&(d="function"==typeof window.t396__getCurrentScaleFactor?t396__getCurrentScaleFactor(e):(d=window.tn&&window.tn["ab"+e]&&window.tn["ab"+e].scaleFactor)||window.tn_scale_factor,e=t396_ab__getFieldValue(o,"height"),e=Math.floor(e*d),t396_ab__getFieldValue(o,"height_vh")&&(l=t396_ab__getFieldValue(o,"height"),e=(a=t396_ab__getHeight(o))<=(l=l*d)?l:a),t396_scale__updateArtboardState(o,e),t.forEach(function(e){var t,a,l,o,_,r,i,s=e.querySelector(".tn-molecule, .tn-atom"),n=t396_scale__getElementType(e),c=t396_elem__getFieldValue(e,"container");c||"group"!==n||(c="grid"),s&&"grid"===c&&(u?((c=s.closest(".tn-atom__scale-wrapper"))||(t396_scale__wrapElement(s,d,"tn-atom__scale-wrapper"),c=s.closest(".tn-atom__scale-wrapper")),e.style.zoom="",t396_scale__processBackdropFilter(e,s,c),t396_scale__processBackgroundForShape(e,s,n,d)):(c=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),"text"!==n&&"button"!==n||!c||(a=parseFloat(getComputedStyle(s).fontSize),t=s.style.webkitTextSizeAdjust,s.style.webkitTextSizeAdjust="none",e.style.zoom=d,i=parseFloat(getComputedStyle(s).fontSize),i=Math.round(i),i=Math.abs(a-i),s.style.webkitTextSizeAdjust=t,1<=i&&(s.style.fontSize=Math.round(a*d)+"px",s.style.webkitTextSizeAdjust="none")),"yes"!==e.getAttribute("data-scale-off")&&(e.style.zoom=d),"shape"===n&&(t=t396_elem__getFieldValue(e,"height"),t=t396_elem__getHeight(e,t),t=t396_elem__convertPosition__Local__toAbsolute(e,"height",t),i=t396_elem__getFieldValue(e,"width"),i=t396_elem__getWidth(e,i),i=t396_elem__convertPosition__Local__toAbsolute(e,"width",i),a=parseFloat(t396_elem__getFieldValue(e,"top")),a=t396_elem__convertPosition__Local__toAbsolute(e,"top",a),l=parseFloat(t396_elem__getFieldValue(e,"left")),l=t396_elem__convertPosition__Local__toAbsolute(e,"left",l),o=(_=window.getComputedStyle(s)).borderWidth,_="none"!==_.backgroundImage,r=e.getAttribute("data-animate-sbs-event"),!(t<=2||i<=2)||"0px"!==o||_||r||(e.style.removeProperty("zoom"),o=i*d,_=t*d,r=a*d,i=l*d,e.style.width=parseFloat(o)+"px",e.style.height=parseFloat(_)+"px",e.style.top=Math.round(r)+"px",e.style.left=Math.round(i)+"px",e.setAttribute("data-scale-off","yes"))),"text"===n&&p<1200&&s&&!c&&(s.style.webkitTextSizeAdjust="auto"),s&&(s.style.transformOrigin="center")))})))}function t396_scale__getElementsToScale(e){e=Array.prototype.slice.call(e.querySelectorAll(".t396__elem"));if(!e.length)return[];var t=[];return(e=e.filter(function(e){e=e.closest('.t396__group[data-group-type-value="physical"]');return!e||(-1===t.indexOf(e)&&t.push(e),!1)})).concat(t)}function t396_scale__updateArtboardState(e,t){e.classList.add("t396__artboard_scale");var a=e.getAttribute("data-artboard-recid");e.insertAdjacentHTML("beforeend",'<style class="t396__scale-style">.t-rec#rec'+a+" { overflow: visible; }#rec"+a+" .t396__carrier,#rec"+a+" .t396__filter,#rec"+a+" .t396__artboard {height: "+t+"px !important;width: 100vw !important;max-width: 100%;}</style>")}function t396_scale__wrapElement(e,t,a){var l,o;!e||(l=e.parentNode)&&((o=document.createElement("div")).classList.add(a),o.style.transform="scale("+t+")",o.appendChild(e),l.appendChild(o))}function t396_scale__processBackdropFilter(e,t,a){"none"===e.style.backdropFilter&&(e.style.backdropFilter="");var l=getComputedStyle(e).backdropFilter;l&&(e.style.backdropFilter="none",a.style.backdropFilter=l,"0px"!==(e=getComputedStyle(t).borderRadius)&&(a.style.borderRadius=e))}function t396_scale__processBackgroundForShape(e,t,a,l){var o,_;"shape"===a&&(a=t&&getComputedStyle(t))&&(a&&a.backgroundImage||t.getAttribute("data-original"))&&"fixed"===a.backgroundAttachment&&(e.removeChild(t.parentNode),e.appendChild(t),a=t396_elem__getFieldValue(e,"height"),a=t396_elem__getHeight(e,a),a=t396_elem__convertPosition__Local__toAbsolute(e,"height",a),t=t396_elem__getFieldValue(e,"width"),t=t396_elem__getWidth(e,t),t=t396_elem__convertPosition__Local__toAbsolute(e,"width",t),o=parseFloat(t396_elem__getFieldValue(e,"top")),_=parseFloat(t396_elem__getFieldValue(e,"left")),e.style.top=o*l+"px",e.style.left=_*l+"px",e.style.height=a*l+"px",e.style.width=t*l+"px",e.setAttribute("data-scale-off","yes"))}function t396_scale__getElementType(e){var t=e.getAttribute("data-elem-type");return t=!t&&e.classList.contains("tn-group")?"group":t}window.t396_initialScale||(window.t396_initialScale=function(){});