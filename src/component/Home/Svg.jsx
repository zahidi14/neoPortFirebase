import React from "react";
import "./svg.scss";

const Svg = ({ temp, loc, weather, humidity, latlon, date, day }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={382}
      height={666}
      fill="none"
      viewBox="0 0 382 666"
    >
      <g filter="url(#a)">
        <path
          fill="#17BDEF"
          fillOpacity={0.15}
          d="m32 565 6.5-6.5H343l6 8 7 8.5v47l-7 7.5-6 6.341h-28.5l-6-6.341h-235l-5.5 6.341H38.5L32 629.5l-5.5-6.5v-51l5.5-7Zm.5-533 5.5-5.5h22L76 42h232.5l15-15.5h20L356 39v126.5l-5.5 7-6 6.5H36l-5-6-5.5-6V40l7-8Zm.5 172.5 5.5-5.5H344l12.5 12.5v314l-5.5 8-7 8H38.5l-5.5-8-7-8v-313l7-8Z"
          shapeRendering="crispEdges"
        />
        <path
          stroke="#78CCE2"
          strokeOpacity={0.5}
          d="m348.6 566.8.007.009.007.009 6.886 8.361v46.624l-6.863 7.353-.003.003-5.849 6.182h-28.07l-5.852-6.185-.148-.156H73.272l-.15.172-5.35 6.169H38.703l-6.337-6.182L27 622.817v-50.644l5.375-6.84L38.707 559H342.75l5.85 7.8ZM75.652 42.36l.145.14h232.915l.147-.152L323.712 27h19.581L355.5 39.207v126.12l-5.381 6.848-5.838 6.325H36.234l-4.85-5.82-.007-.009-.008-.009L26 166.806V40.188l6.865-7.846L38.207 27h21.59l15.855 15.36Zm-42.24 490.857-.017-.024-.019-.022-6.876-7.859V212.688l6.865-7.846 5.342-5.342h305.086L356 211.707v313.638l-5.396 7.848-6.831 7.807H38.763l-5.351-7.783Z"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        fill="#fff"
        d="M78.028 583.804V580.6H79v3.204h-.972Zm2.172 0V580.6h.972v3.204H80.2Zm4.903-3.204h3.384l.636.984-.612.6-.492-.72h-2.556l-.36.384v1.548l.48.696h3.012l.852 1.272v2.76l-.84.876h-3.936l-.528-.744.6-.636.372.516H88.2l.288-.252v-2.412l-.36-.516h-3.024l-.96-1.428v-1.932l.96-.996Zm7.436-.576h.96v2.592h1.944v.876h-1.944v3.948l.468.684h1.212l.72-.72.492.72-.816.876h-2.076l-.96-1.416v-4.092h-.948v-.876h.948v-2.592Zm6.883 2.34h3.768l.756 1.116V589h-1.008v-.612l-1.008.612h-2.508l-1.008-1.5v-.48l1.872-1.944h2.652v-1.824h-3.516v-.888Zm0 5.016.468.708h3.048v-2.1h-2.256l-1.26 1.296v.096Zm10.639-4.764h.972v6.96l-1.944 2.028h-3.36v-.876h2.964l1.368-1.404V589h-3.132l-1.2-1.776v-4.608h.96v4.488l.708 1.02h2.664v-5.508Zm11.031.012h3.372l.852 1.272-.612.636-.708-1.044h-2.532l-.372.384v3.564l.468.696h2.532l.708-.732.492.732-.828.864h-3.36l-.972-1.44v-3.936l.96-.996Zm10.555 0h.972V589h-.948v-.588l-.984.588h-2.4l-.972-1.44v-4.932h.96v4.812l.468.684h2.556l.348-.372v-5.124Zm2.803 0h.528l1.14.684.66-.684h2.472l.624.912-.72.492-.36-.54h-1.644l-.528.564v4.08h1.692V589h-3.864v-.864h1.212v-3.96l-.468-.684h-.744v-.864Zm7.736-.228h1.692l.96 1.44v4.296h2.172V589h-5.304v-.864h2.172v-4.176l-.456-.684h-1.236v-.876Zm1.572-1.572h1.2v-1.2h-1.2v1.2Zm6.115 1.8h3.396l.96 1.44v3.936l-.96.996h-3.384l-.972-1.44v-3.936l.96-.996Zm-.012 4.812.48.696h2.544l.36-.384v-3.576l-.456-.684h-2.556l-.372.396v3.552Zm10.567-4.812h.972V589h-.948v-.588l-.984.588h-2.4l-.972-1.44v-4.932h.96v4.812l.468.684h2.556l.348-.372v-5.124Zm3.896 0h3.312l.624.924-.588.624-.48-.708h-2.448l-.372.324v.912l.456.648h2.832l.816 1.224v1.524l-.816.9h-3.768l-.48-.744.588-.612.324.492h2.94l.252-.288v-1.128l-.348-.492h-2.844l-.912-1.38v-1.332l.912-.888Zm7.975 4.776h1.68v3.144l-1.044 1.056-.492-.756.576-.6V589h-.72v-1.596Zm12.579-7.38h.96v4.848l2.532-2.616h1.2l-1.812 1.86 2.436 3.6V589h-.972v-1.176l-2.088-3.06-1.296 1.332V589h-.96v-8.976Zm8.143 2.604h3.36l.996 1.428-1.98 2.04h-2.376v1.344l.468.696h2.544l.672-.66.528.66-.84.864h-3.36l-.972-1.44v-3.936l.96-.996Zm0 1.248v1.356h2.016l1.212-1.272-.312-.468h-2.532l-.384.384Zm7.195-1.248h3.36l.996 1.428-1.98 2.04h-2.376v1.344l.468.696h2.544l.672-.66.528.66-.84.864h-3.36l-.972-1.44v-3.936l.96-.996Zm0 1.248v1.356h2.016l1.212-1.272-.312-.468H200.6l-.384.384Zm8.168-1.248h2.436l.948 1.44v3.936l-.96.996h-2.412l-.972-.576v3.168h-.96v-8.964h.96v.588l.96-.588Zm-.96 4.812.48.696h2.532l.36-.372v-3.576l-.456-.684h-2.544l-.372.372v3.564Zm13.418-7.416h1.8l.972.576v6.852l.456.684h2.088l-.012.864h-2.532l-.972-1.428v-6.684h-1.8v-.864Zm8.156 2.604h3.36l.996 1.428-1.98 2.04h-2.376v1.344l.468.696h2.544l.672-.66.528.66-.84.864h-3.36l-.972-1.44v-3.936l.96-.996Zm0 1.248v1.356h2.016l1.212-1.272-.312-.468h-2.532l-.384.384Zm7.135-1.512h3.768l.756 1.116V589h-1.008v-.612l-1.008.612h-2.508l-1.008-1.5v-.48l1.872-1.944h2.652v-1.824h-3.516v-.888Zm0 5.016.468.708h3.048v-2.1h-2.256l-1.26 1.296v.096Zm6.247-4.752h.528l1.14.684.66-.684h2.472l.624.912-.72.492-.36-.54h-1.644l-.528.564v4.08h1.692V589h-3.864v-.864h1.212v-3.96l-.468-.684h-.744v-.864Zm7.255 0h.96v.576l.972-.576h2.412l.972 1.416V589h-.972v-4.836l-.456-.672h-2.556l-.372.384V589h-.96v-6.372Zm7.676-.228h1.692l.96 1.44v4.296h2.172V589h-5.304v-.864h2.172v-4.176l-.456-.684h-1.236v-.876Zm1.572-1.572h1.2v-1.2h-1.2v1.2Zm5.143 1.8h.96v.576l.972-.576h2.412l.972 1.416V589h-.972v-4.836l-.456-.672h-2.556l-.372.384V589h-.96v-6.372Zm8.935 5.664-.684.66v.96l.48.72h1.788l1.008-1.02v-.96l-.228-.36h-2.364Zm-.684-4.488v1.848h2.304l.972-.6V583.9l-.456-.66h-2.304l-.516.564Zm2.328 2.736h-1.848l-.444.456.252.408h3.228l.732 1.14v1.272l-1.62 1.692h-2.592l-1.008-1.5v-1.26l.684-.684-.78-1.164.624-.624-.528-.324v-2.412l1.128-1.176h2.16l.96.588v-.588h.972v3l-1.92 1.176Zm5.624 2.46v-1.68h1.68V589h-1.68Zm6.463-5.196V580.6h.972v3.204h-.972Zm2.172 0V580.6h.972v3.204h-.972ZM148.904 606.6h3.336v8.4h-.96v-3.84h-3.36V615h-.96v-6.396l1.944-2.004Zm-.984 2.232v1.464h3.36v-2.832h-2.028l-1.332 1.368Zm6.223-.204h.96v.576l.972-.576h2.412l.972 1.416V615h-.972v-4.836l-.456-.672h-2.556l-.372.384V615h-.96v-6.372Zm8.168 0h3.396l.96 1.44v3.936l-.96.996h-3.384l-.972-1.44v-3.936l.96-.996Zm-.012 4.812.48.696h2.544l.36-.384v-3.576l-.456-.684h-2.556l-.372.396v3.552Zm6.235-4.812h.96v.576l.972-.576h2.412l.972 1.416V615h-.972v-4.836l-.456-.672h-2.556l-.372.384V615h-.96v-6.372Zm11.527-.012h.972v6.96l-1.944 2.028h-3.36v-.876h2.964l1.368-1.404V615h-3.132l-1.2-1.776v-4.608h.96v4.488l.708 1.02h2.664v-5.508Zm2.624.012h.96v.576l.96-.576h.504l.552.828 1.38-.828h.468l.972 1.428V615h-.972v-4.824l-.456-.684h-.612l-.36.396v1.788h-.972v-1.5l-.456-.684h-.636l-.372.396V615h-.96v-6.372Zm8.407 0h3.396l.96 1.44v3.936l-.96.996h-3.384l-.972-1.44v-3.936l.96-.996Zm-.012 4.812.48.696h2.544l.36-.384v-3.576l-.456-.684h-2.556l-.372.396v3.552Zm10.567-4.812h.972V615h-.948v-.588l-.984.588h-2.4l-.972-1.44v-4.932h.96v4.812l.468.684h2.556l.348-.372v-5.124Zm3.895 0h3.312l.624.924-.588.624-.48-.708h-2.448l-.372.324v.912l.456.648h2.832l.816 1.224v1.524l-.816.9h-3.768l-.48-.744.588-.612.324.492h2.94l.252-.288v-1.128l-.348-.492h-2.844l-.912-1.38v-1.332l.912-.888Zm-46.495 35.935h2.256l.424.656-.408.4-.328-.48h-1.704l-.24.256v1.032l.32.464h2.008l.568.848v1.84l-.56.584h-2.624l-.352-.496.4-.424.248.344h2.056l.192-.168v-1.608l-.24-.344h-2.016l-.64-.952v-1.288l.64-.664Zm7.045 0h.648v1.312l-1.456 1.504v2.784h-.64v-2.712l-1.448-2.152v-.736h.64v.664l1.112 1.656h.016l1.128-1.176v-1.144Zm2.549 0h2.256l.424.656-.408.4-.328-.48h-1.704l-.24.256v1.032l.32.464h2.008l.568.848v1.84l-.56.584h-2.624l-.352-.496.4-.424.248.344h2.056l.192-.168v-1.608l-.24-.344h-2.016l-.64-.952v-1.288l.64-.664Zm3.837 0h4.176v.576h-2.384l.624.384v4.64h-.648v-4.56l-.304-.464h-1.464v-.576Zm5.757 0h2.896v.576h-2.656l-.248.264v1.48h1.856v.584h-1.856v1.656l.312.464h2.592v.576h-2.904l-.64-.96v-3.976l.648-.664Zm4.157 0h.64v.224l.84 1.24 1.416-1.464h.648v5.6h-.648v-4.76l-.792.832v.728h-.696v-.016l-.768-1.136v4.352h-.64v-5.6Zm10.234 0h2.272l.632.96v3.976l-.632.664h-2.272l-.648-.96v-3.976l.648-.664Zm-.008 4.56.312.464h1.712l.24-.264v-3.72l-.304-.464h-1.712l-.248.264v3.72Zm4.164-4.56h2.896l.64.96v1.296l-.64.648h-2.256v2.696h-.64v-5.6Zm.648.576v2.136l.648-.376h1.352l.248-.256v-1.032l-.312-.472h-1.936Zm4.789-.576h2.896v.576h-2.656l-.248.264v1.48h1.856v.584h-1.856v1.656l.312.464h2.592v.576h-2.904l-.64-.96v-3.976l.648-.664Zm7.053 0h.648v5.6h-.648v-2.136l-1.944-2.888h-.312v5.024h-.64v-5.6h1.256l1.64 2.424v-2.424Z"
      />
      <path
        fill="#17BDEF"
        fillOpacity={0.93}
        d="M73 25h233.826l-5.676 6.81H79.81L73 25Z"
      />
      <path
        fill="#fff"
        d="M105.056 15.8h1.686l.396.6-.306.324-.318-.492h-1.278l-.186.198v2.79l.234.348h1.266l.36-.36.24.36-.408.432h-1.692l-.48-.72v-2.982l.486-.498Zm3.496 0h1.704l.474.72v2.982l-.474.498h-1.704l-.486-.72v-2.982l.486-.498Zm-.006 3.42.234.348h1.284l.18-.198v-2.79l-.228-.348h-1.284l-.186.198v2.79Zm5.295-3.42h.486V20h-.486v-1.602l-1.458-2.166h-.234V20h-.48v-4.2h.942l1.23 1.818V15.8Zm1.186 0h3.132v.432h-1.788l.468.288V20h-.486v-3.42l-.228-.348h-1.098V15.8Zm4.816 0h1.668V20h-.48v-1.92h-1.68V20h-.48v-3.198l.972-1.002Zm-.492 1.116v.732h1.68v-1.416h-1.014l-.666.684Zm3.111-1.116h2.652v.438h-1.086v3.324h1.086V20h-2.652v-.438h1.086v-3.324h-1.086V15.8Zm5.77 0h.486V20h-.486v-1.602l-1.458-2.166h-.234V20h-.48v-4.2h.942l1.23 1.818V15.8Zm1.426 0h.48v.168l.63.93 1.062-1.098h.486V20h-.486v-3.57l-.594.624v.546h-.522v-.012l-.576-.852V20h-.48v-4.2Zm4.077 0h2.172v.432h-1.992l-.186.198v1.11h1.392v.438h-1.392v1.242l.234.348h1.944V20h-2.178l-.48-.72v-2.982l.486-.498Zm5.29 0h.486V20h-.486v-1.602l-1.458-2.166h-.234V20h-.48v-4.2h.942l1.23 1.818V15.8Zm1.186 0h3.132v.432h-1.788l.468.288V20h-.486v-3.42l-.228-.348h-1.098V15.8Zm7.435 0h2.172l.48.72v.972l-.48.486h-1.692V20h-.48v-4.2Zm.486.432v1.602l.486-.282h1.014l.186-.192v-.774l-.234-.354h-1.452Zm3.105-.432h2.016l.648.942v.6l-.594.606.594.858V20h-.486v-1.14l-.606-.882h-.618l-.474-.294V20h-.48v-4.2Zm.48.432v1.308h1.392l.306-.306v-.426l-.396-.576h-1.302Zm3.604-.432h1.704l.474.72v2.982l-.474.498h-1.704l-.486-.72v-2.982l.486-.498Zm-.006 3.42.234.348h1.284l.18-.198v-2.79l-.228-.348h-1.284l-.186.198v2.79Zm2.884-3.42h3.132v.432h-1.788l.468.288V20h-.486v-3.42l-.228-.348h-1.098V15.8Zm4.317 0h1.704l.474.72v2.982l-.474.498h-1.704l-.486-.72v-2.982l.486-.498Zm-.006 3.42.234.348h1.284l.18-.198v-2.79l-.228-.348h-1.284l-.186.198v2.79Zm3.706-3.42h1.686l.396.6-.306.324-.318-.492h-1.278l-.186.198v2.79l.234.348h1.266l.36-.36.24.36-.408.432h-1.692l-.48-.72v-2.982l.486-.498Zm3.496 0h1.704l.474.72v2.982l-.474.498h-1.704l-.486-.72v-2.982l.486-.498Zm-.006 3.42.234.348h1.284l.18-.198v-2.79l-.228-.348h-1.284l-.186.198v2.79Zm3.117-3.42h.48v3.408l.246.354h1.452v-.432h.486V20h-2.166l-.498-.744V15.8Zm8.336 1.95h.378l.264.264v.378l-.264.258h-.378l-.258-.258v-.378l.258-.264Zm6.541-1.95h1.692l.318.492-.306.3-.246-.36h-1.278l-.18.192v.774l.24.348h1.506l.426.636v1.38l-.42.438h-1.968l-.264-.372.3-.318.186.258h1.542l.144-.126v-1.206l-.18-.258H187.7l-.48-.714v-.966l.48-.498Zm3.598 0h1.704l.474.72v2.982l-.474.498h-1.704l-.486-.72v-2.982l.486-.498Zm-.006 3.42.234.348h1.284l.18-.198v-2.79l-.228-.348h-1.284l-.186.198v2.79Zm5.295-3.42h.486V20h-.486v-.294l-.48.294h-1.212l-.486-.72V15.8h.48v3.42l.234.348h1.272l.192-.198V15.8Zm1.42 0h2.016l.648.942v.6l-.594.606.594.858V20h-.486v-1.14l-.606-.882h-.618l-.474-.294V20h-.48v-4.2Zm.48.432v1.308h1.392l.306-.306v-.426l-.396-.576h-1.302Zm3.706-.432h1.686l.396.6-.306.324-.318-.492h-1.278l-.186.198v2.79l.234.348h1.266l.36-.36.24.36-.408.432h-1.692l-.48-.72v-2.982l.486-.498Zm3.015 0h2.652v.438h-1.086v3.324h1.086V20h-2.652v-.438h1.086v-3.324h-1.086V15.8Zm5.77 0h.486V20h-.486v-1.602l-1.458-2.166h-.234V20h-.48v-4.2h.942l1.23 1.818V15.8Zm1.846 0h1.68l.402.6-.306.312-.324-.48h-1.272l-.18.192v2.82l.21.324h1.482v-1.59h-.846v-.432h1.086l.246.372V20h-2.196l-.462-.69v-3.006l.48-.504Zm6.769 0h2.016l.648.942v.6l-.594.606.594.858V20h-.486v-1.14l-.606-.882h-.618l-.474-.294V20h-.48v-4.2Zm.48.432v1.308h1.392l.306-.306v-.426l-.396-.576h-1.302Zm3.604-.432h1.704l.474.72v2.982l-.474.498h-1.704l-.486-.72v-2.982l.486-.498Zm-.006 3.42.234.348h1.284l.18-.198v-2.79l-.228-.348h-1.284l-.186.198v2.79Zm5.295-3.42h.486V20h-.486v-.294l-.48.294h-1.212l-.486-.72V15.8h.48v3.42l.234.348h1.272l.192-.198V15.8Zm1.186 0h3.132v.432h-1.788l.468.288V20h-.486v-3.42l-.228-.348h-1.098V15.8Zm4.318 0h2.172v.432h-1.992l-.186.198v1.11h1.392v.438h-1.392v1.242l.234.348h1.944V20h-2.178l-.48-.72v-2.982l.486-.498Zm7.195 0h1.704l.474.72v2.982l-.474.498h-1.704l-.486-.72v-2.982l.486-.498Zm-.006 3.42.234.348h1.284l.18-.198v-2.79l-.228-.348h-1.284l-.186.198v2.79Zm3.124-3.42h2.172l.48.72v.972l-.48.486h-1.692V20h-.48v-4.2Zm.486.432v1.602l.486-.282h1.014l.186-.192v-.774l-.234-.354h-1.452Zm3.591-.432h2.172v.432h-1.992l-.186.198v1.11h1.392v.438h-1.392v1.242l.234.348h1.944V20h-2.178l-.48-.72v-2.982l.486-.498Zm5.29 0h.486V20h-.486v-1.602l-1.458-2.166h-.234V20h-.48v-4.2h.942l1.23 1.818V15.8ZM134.39 26.5h.4v1.685l.395-.235h.615l.405.235V26.5h.405V30h-.405v-1.41l-.19-.275h-1.075l-.15.15V30h-.4v-3.5Zm3.003 0h2.21v.365h-.905v2.77h.905V30h-2.21v-.365h.905v-2.77h-.905V26.5Zm3.398 0h1.81v.36h-1.66l-.155.165v.925h1.16v.365h-1.16v1.035l.195.29h1.62V30h-1.815l-.4-.6v-2.485l.405-.415Zm2.593 0h1.68l.54.785v.5l-.495.505.495.715V30h-.405v-.95l-.505-.735h-.515l-.395-.245V30h-.4v-3.5Zm.4.36v1.09h1.16l.255-.255v-.355l-.33-.48h-1.085Zm3.418-.36h1.39V30h-.4v-1.6h-1.4V30h-.4v-2.665l.81-.835Zm-.41.93v.61h1.4v-1.18h-.845l-.555.57Zm2.588-.93h1.68l.54.785v.5l-.495.505.495.715V30h-.405v-.95l-.505-.735h-.515l-.395-.245V30h-.4v-3.5Zm.4.36v1.09h1.16l.255-.255v-.355l-.33-.48h-1.085Zm3.088-.36h1.405l.33.5-.255.27-.265-.41h-1.065l-.155.165v2.325l.195.29h1.055l.3-.3.2.3-.34.36h-1.41l-.4-.6v-2.485l.405-.415Zm2.508 0h.4v1.685l.395-.235h.615l.405.235V26.5h.405V30h-.405v-1.41l-.19-.275h-1.075l-.15.15V30h-.4v-3.5Zm3.003 0h2.21v.365h-.905v2.77h.905V30h-2.21v-.365h.905v-2.77h-.905V26.5Zm3.483 0h1.405l.33.5-.255.27-.265-.41h-1.065l-.155.165v2.325l.195.29h1.055l.3-.3.2.3-.34.36h-1.41l-.4-.6v-2.485l.405-.415Zm3.328 0h1.39V30h-.4v-1.6h-1.4V30h-.4v-2.665l.81-.835Zm-.41.93v.61h1.4v-1.18h-.845l-.555.57Zm2.588-.93h.4v2.84l.205.295h1.21v-.36h.405V30h-1.805l-.415-.62V26.5Zm6.052 0h1.925l.235.34v.46l-.615.65h.2l.465.685v1.12l-.4.245h-1.81v-3.5Zm.4.36v1.09h.64l.72-.745v-.345h-1.36Zm0 1.455v1.325h1.41v-.965l-.255-.36h-1.155Zm3.363-1.815h1.39V30h-.4v-1.6h-1.4V30h-.4v-2.665l.81-.835Zm-.41.93v.61h1.4v-1.18h-.845l-.555.57Zm3.078-.93h1.405l.33.5-.255.27-.265-.41h-1.065l-.155.165v2.325l.195.29h1.055l.3-.3.2.3-.34.36h-1.41l-.4-.6v-2.485l.405-.415Zm4.373 0h.525l-1.37 1.39 1.445 2.11h-.43l-1.27-1.845-.61.64V30h-.4v-3.5h.4v1.775l1.71-1.775Zm6.096 2.18h-1.71v-.36h1.71v.36Zm4.086-2.18h1.54l.675 1.005v2.08l-.4.415h-1.815v-3.5Zm.4.36v2.78h1.25l.16-.165v-1.92l-.465-.695h-.945Zm3.363-.36h1.39V30h-.4v-1.6h-1.4V30h-.4v-2.665l.81-.835Zm-.41.93v.61h1.4v-1.18h-.845l-.555.57Zm2.393-.93h2.61v.36h-1.49l.39.24V30h-.405v-2.85l-.19-.29h-.915v-.36Zm4.013 0h1.39V30h-.4v-1.6h-1.4V30h-.4v-2.665l.81-.835Zm-.41.93v.61h1.4v-1.18h-.845l-.555.57Zm5.391-.93h2.61v.36h-1.49l.39.24V30h-.405v-2.85l-.19-.29h-.915v-.36Zm3.193 0h1.68l.54.785v.5l-.495.505.495.715V30h-.405v-.95l-.505-.735h-.515l-.395-.245V30h-.4v-3.5Zm.4.36v1.09h1.16l.255-.255v-.355l-.33-.48h-1.085Zm3.418-.36h1.39V30h-.4v-1.6h-1.4V30h-.4v-2.665l.81-.835Zm-.41.93v.61h1.4v-1.18h-.845l-.555.57Zm4.403-.93h.405V30h-.405v-1.335l-1.215-1.805h-.195V30h-.4v-3.5h.785l1.025 1.515V26.5Zm1.588 0h1.41l.265.41-.255.25-.205-.3h-1.065l-.15.16v.645l.2.29h1.255l.355.53v1.15l-.35.365h-1.64l-.22-.31.25-.265.155.215h1.285l.12-.105V28.53l-.15-.215h-1.26l-.4-.595v-.805l.4-.415Zm3.138 0h1.725v.36h-1.575l-.24.25v.84h1.16v.365h-1.16V30h-.4v-3l.49-.5Zm2.858 0h1.81v.36h-1.66l-.155.165v.925h1.16v.365h-1.16v1.035l.195.29h1.62V30h-1.815l-.4-.6v-2.485l.405-.415Zm2.593 0h1.68l.54.785v.5l-.495.505.495.715V30h-.405v-.95l-.505-.735h-.515l-.395-.245V30h-.4v-3.5Zm.4.36v1.09h1.16l.255-.255v-.355l-.33-.48h-1.085Z"
      />
      <path
        fill="#17BDEF"
        d="M12.486 48.808h2.27v57.889h-2.27V48.808ZM43.133 6.81h7.945v2.27h-7.945V6.81Z"
      />
      <path
        fill="#17BDEF"
        d="M0 39.728h3.405l11.351 9.08v3.406L0 39.728Zm0 0v-9.081h3.405v9.08H0ZM38.593 3.405h-9.081V0h9.08v3.405ZM29.512 0v6.81L6.81 30.647H0L29.512 0Z"
      />
      <path
        fill="#D9D9D9"
        d="M10.216 47.673h2.27v2.27l-2.27-2.27Zm6.81-13.621h1.135v13.621h-1.135v-13.62Zm17.026-17.026h13.621v1.135h-13.62v-1.135ZM17.026 34.052l17.026-17.026v1.135l-15.89 15.891h-1.136Z"
      />
      <path
        fill="#D9D9D9"
        d="m19.864 19.864 6.243 5.108-1.135 1.135-5.108-6.243Z"
      />
      <path
        fill="#17BDEF"
        d="M38.593 3.405V0l6.81 9.08h-2.27l-4.54-5.675ZM51.078 9.08V6.81l9.081 9.081h-2.27l-6.81-6.81ZM368.9 48.808h-2.27v57.889h2.27V48.808ZM338.253 6.81h-7.946v2.27h7.946V6.81Z"
      />
      <path
        fill="#17BDEF"
        d="M381.386 39.728h-3.405l-11.351 9.08v3.406l14.756-12.486Z"
      />
      <path
        fill="#17BDEF"
        d="M381.386 39.728v-9.081h-3.405v9.08h3.405ZM342.793 3.405h9.081V0h-9.081v3.405ZM351.874 0v6.81l22.701 23.837h6.811L351.874 0Z"
      />
      <path
        fill="#D9D9D9"
        d="M371.17 47.673h-2.27v2.27l2.27-2.27Zm-6.81-13.621h-1.135v13.621h1.135v-13.62Zm-17.026-17.026h-13.621v1.135h13.621v-1.135Zm17.026 17.026-17.026-17.026v1.135l15.891 15.891h1.135Z"
      />
      <path
        fill="#D9D9D9"
        d="m361.522 19.864-6.243 5.108 1.135 1.135 5.108-6.243Z"
      />
      <path
        fill="#17BDEF"
        d="M342.793 3.405V0l-6.81 9.08h2.27l4.54-5.675ZM330.307 9.08V6.81l-9.08 9.081h2.27l6.81-6.81ZM12.486 617.192h2.27v-57.889h-2.27v57.889Zm35.187 36.322h13.621v-2.27h-13.62v2.27Z"
      />
      <path
        fill="#17BDEF"
        d="M0 626.272h3.405l11.351-9.08v-3.405L0 626.272Zm0 0v9.081h3.405v-9.081H0Zm38.593 36.323h-9.081V666h9.08v-3.405Z"
      />
      <path fill="#17BDEF" d="M29.512 666v-6.81L6.81 635.353H0L29.512 666Z" />
      <path
        fill="#D9D9D9"
        d="M10.216 618.327h2.27v-2.27l-2.27 2.27Zm6.81 13.621h1.135v-13.621h-1.135v13.621Zm17.026 17.026h13.621v-1.135h-13.62v1.135Zm-17.026-17.026 17.026 17.026v-1.135l-15.89-15.891h-1.136Z"
      />
      <path
        fill="#D9D9D9"
        d="m19.864 646.136 6.243-5.108-1.135-1.135-5.108 6.243Z"
      />
      <path
        fill="#17BDEF"
        d="M38.593 662.595V666l9.08-11.351v-3.405l-9.08 11.351Zm9.08-7.946 1.135-1.135h-1.135v1.135ZM368.9 616.057h-2.27v-57.889h2.27v57.889Zm-35.188 36.322h-13.62v-2.27h13.62v2.27Z"
      />
      <path
        fill="#17BDEF"
        d="M381.386 625.137h-3.406l-11.35-9.08v-3.406l14.756 12.486Zm0 0v9.081h-3.406v-9.081h3.406Zm-38.593 36.323h9.081v3.405h-9.081v-3.405Zm9.081 3.405v-6.811l22.701-23.836h6.811l-29.512 30.647Z"
      />
      <path
        fill="#D9D9D9"
        d="M371.17 617.192h-2.27v-2.27l2.27 2.27Zm-6.81 13.621h-1.136v-13.621h1.136v13.621Zm-17.027 17.026h-13.62v-1.135h13.62v1.135Zm17.027-17.026-17.027 17.026v-1.135l15.891-15.891h1.136Z"
      />
      <path
        fill="#D9D9D9"
        d="m361.522 645.001-6.243-5.108 1.135-1.135 5.108 6.243Z"
      />
      <path
        fill="#17BDEF"
        d="M342.793 661.46v3.405l-9.08-11.351-.001-3.405 9.081 11.351Zm-9.08-7.946-1.136-1.135h1.135l.001 1.135Z"
      />
      <path
        fill="#17BDEF"
        fillOpacity={0.6}
        d="m0 46 10 10.546v555.908L0 623V46Zm381-1-10 10.564v556.872L381 623V45ZM60 13h259.365l-17.026 19.296H78.729L60 13Zm307 94h2v451h-2V107Zm-355 0h3v454h-3V107Zm67.455 535.163h223.61l11.351 10.216H66.969l12.486-10.216Z"
      />
      {/* <g className="circle">
        <circle
          cx={85}
          cy={103}
          r={40.5}
          stroke="#17BDEF"
          strokeDasharray="40 10"
          strokeWidth={7}
        />
        <circle
          cx={85}
          cy={103}
          r={32}
          stroke="#17BDEF"
          strokeDasharray="16 16"
          strokeWidth={4}
        />
      </g> */}
      <g className="line1">
        <text
          x="17%"
          y="16%"
          fill="#fff"
          fontSize={28}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {temp + "\xB0"}
        </text>
      </g>
      <g className="line2">
        <text
          x="40%"
          y="10%"
          fill="#fff"
          fontSize={16}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {loc}
        </text>
      </g>
      <g className="line3">
        <text
          x="40%"
          y="13%"
          fill="#fff"
          fontSize={16}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {day + "," + date}
        </text>
      </g>
      <g className="line4">
        <text
          x="40%"
          y="16%"
          fill="#fff"
          fontSize={16}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {weather}
        </text>
      </g>
      <g className="line5">
        <text
          x="40%"
          y="19%"
          fill="#fff"
          fontSize={16}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {humidity + "% humidity"}
        </text>
      </g>
      <g className="line6">
        <text
          x="40%"
          y="22%"
          fill="#fff"
          fontSize={16}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {latlon}
        </text>
      </g>

      <g className="init">
        <text
          x="37%"
          y={350}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {"Initializing..."}
        </text>
      </g>
      <g className="complete">
        <text
          x="37%"
          y={350}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {"Complete"}
        </text>
      </g>
      <g className="a1">
        <text
          x="12%"
          y={250}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {"Hi! I'm Zahidi"}
        </text>
      </g>
      <g className="a2">
        <text
          x="12%"
          y={275}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {" Versatile web developer specializing in  "}
        </text>
      </g>
      <g className="a3">
        <text
          x="12%"
          y={300}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {" front-end magic with skills spanning the "}
        </text>
      </g>
      <g className="a4">
        <text
          x="12%"
          y={325}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {"MERN stack, Firebase, Next.js, and  "}
        </text>
      </g>
      <g className="a5">
        <text
          x="12%"
          y={350}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {"WordPress. From crafting captivating  "}
        </text>
      </g>
      <g className="a6">
        <text
          x="12%"
          y={375}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {"interfaces to building  robust full-stack   "}
        </text>
      </g>
      <g className="a7">
        <text
          x="12%"
          y={400}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {"solutions, blend creativity with technical  "}
        </text>
      </g>
      <g className="a8">
        <text
          x="12%"
          y={425}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {"prowess to deliver seamless digital"}
        </text>
      </g>
      <g className="a9">
        <text
          x="12%"
          y={450}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {" experiences. Join me on a  journey  of "}
        </text>
      </g>
      <g className="a10">
        <text
          x="12%"
          y={475}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {" innovation and excellence."}
        </text>
      </g>
      <g className="a11">
        <text
          x="12%"
          y={500}
          fill="#fff"
          fontSize={12}
          textAnchor="start"
          dominantBaseline="middle"
        >
          {" Welcome to my portfolio."}
        </text>
      </g>
      <g filter="url(#b)">
        <path
          fill="#17BDEF"
          fillOpacity={0.15}
          d="m28 27.5 7-7.5h27l16.538 15.8h225.629L319 20h27.5l7 7.5 7.5 8.3v593.7l-6.5 6.341-9 8.159h-34.513l-7.957-8.159H79.107L70.5 645.5H35l-8.5-8.5-6.5-6V35.8l8-8.3Z"
          shapeRendering="crispEdges"
        />
        <path
          stroke="#78CCE2"
          strokeOpacity={0.5}
          d="m28.36 27.847.006-.006 6.851-7.341H61.8l16.393 15.663.145.138h226.045l.148-.158L319.216 20.5h27.067l6.846 7.335.005.006 7.366 8.152V629.29l-6.336 6.182-.013.012-8.844 8.017h-34.109l-7.81-8.008-.147-.151H78.882l-.149.168-8.457 9.49H35.207l-8.353-8.354-.008-.007-.007-.006-6.339-5.852V36.003l7.86-8.156Z"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={339}
          height={617.341}
          x={21.5}
          y={22.5}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_141_176"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_141_176"
            result="shape"
          />
        </filter>
        <filter
          id="b"
          width={349}
          height={633.5}
          x={16}
          y={16}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_141_176"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_141_176"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Svg;
