import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // 'verification', 'evidence', 'privacy', 'sangat', 'contact'
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [sangatEmail, setSangatEmail] = useState('');
  const [sangatSuccess, setSangatSuccess] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSangatSubmit = (e) => {
    e.preventDefault();
    setSangatSuccess(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSuccess(true);
  };

  const closeModal = () => {
    setActiveModal(null);
    setSangatSuccess(false);
    setContactSuccess(false);
    setContactEmail('');
    setContactMessage('');
    setSangatEmail('');
  };

  return (
    <footer className="akashvani-footer" id="akashvani-footer">
      <div className="akashvani-footer-container">
        
        {/* Left Side: Brand Logo & Tagline */}
        <div className="akashvani-footer-brand-col">
          <button 
            type="button" 
            className="akashvani-footer-logo-btn"
            onClick={() => scrollToSection('hero')}
            aria-label="Akashvani Home - Return to Top"
          >
            {/* Exact Figma SVG Vector: Mandala Icon + AKASHVANI + WELLNESS FOR MODERN LIFE */}
            <svg 
              viewBox="159 75 266 75" 
              width="260" 
              height="70" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="akashvani-footer-logo-svg"
            >
              {/* N */}
              <path d="M409.161 121.453C409.161 118.843 409.144 116.223 409.161 113.613C409.186 110.092 409.237 106.58 409.27 103.06C409.27 102.327 409.725 101.957 410.357 101.932C411.064 101.898 411.527 102.311 411.561 103.06C411.586 103.751 411.561 104.441 411.561 105.132C411.51 111.061 411.46 116.99 411.393 122.927C411.384 123.694 411.645 124.814 410.668 124.94C409.885 125.041 408.782 124.654 408.218 124.081C405.775 121.605 403.493 118.969 401.135 116.409C397.842 112.838 394.54 109.275 391.239 105.705C391.18 105.637 391.079 105.612 390.885 105.511C390.885 108.206 390.885 110.808 390.885 113.411C390.885 116.965 390.885 120.519 390.885 124.073C390.885 124.772 390.498 125.226 389.816 125.201C389.134 125.176 388.814 124.696 388.805 124.005C388.763 121.967 388.687 119.938 388.67 117.899C388.628 113.242 388.611 108.585 388.569 103.928C388.569 103.069 388.67 102.386 389.656 102.075C390.548 101.797 391.079 102.193 391.618 102.791C395.551 107.086 399.509 111.364 403.451 115.651C405.059 117.403 406.668 119.154 408.276 120.906C408.479 121.125 408.689 121.344 408.891 121.555C408.984 121.521 409.085 121.487 409.178 121.453H409.161Z" fill="#F5F0EA"/>
              {/* S */}
              <path d="M285.991 125.336C282.429 125.303 279.195 124.359 276.407 122.069C276.011 121.74 275.54 121.504 275.135 121.193C274.647 120.814 274.352 120.241 274.832 119.778C275.152 119.475 275.834 119.323 276.272 119.432C276.845 119.576 277.376 119.988 277.847 120.384C281.629 123.568 286 123.509 290.497 122.683C291.499 122.498 292.468 122.085 293.419 121.698C294.59 121.226 295.213 120.275 295.247 119.054C295.289 117.698 294.918 116.443 293.663 115.668C292.038 114.657 290.152 114.767 288.349 114.556C285.941 114.278 283.566 113.933 281.427 112.67C280.028 111.853 278.824 110.825 278.134 109.343C277.039 106.985 278.226 105.09 280.517 103.818C284.063 101.839 287.895 101.368 291.819 102.328C293.082 102.639 294.236 103.431 295.424 104.046C295.643 104.164 295.887 104.45 295.912 104.686C295.954 105.082 295.971 105.654 295.744 105.865C295.508 106.084 294.809 106.143 294.565 105.949C291.171 103.229 287.473 103.566 283.684 104.812C282.875 105.082 282.058 105.427 281.359 105.899C279.633 107.061 279.633 108.366 281.191 109.781C283.187 111.592 285.654 112.114 288.206 112.468C290.168 112.737 292.19 112.897 294.068 113.478C296.443 114.219 297.403 116.283 297.554 118.616C297.698 120.763 296.653 122.346 294.8 123.458C292.998 124.536 290.977 124.772 288.973 125.075C287.987 125.218 286.985 125.244 285.983 125.319L285.991 125.336Z" fill="#F5F0EA"/>
              {/* K */}
              <path d="M229.102 115.685C227.434 117.605 225.842 119.407 224.31 121.26C224.091 121.521 224.141 122.035 224.141 122.43C224.141 122.91 224.242 123.391 224.242 123.871C224.251 124.578 223.99 125.058 223.164 125.075C222.398 125.092 222.002 124.755 221.96 123.988C221.85 122.06 221.657 120.131 221.648 118.203C221.606 113.166 221.648 108.139 221.657 103.102C221.657 102.454 221.876 101.898 222.617 101.864C223.324 101.839 223.67 102.311 223.695 102.984C223.762 104.98 223.838 106.985 223.855 108.981C223.88 112.004 223.855 115.028 223.855 118.051C223.947 118.085 224.04 118.11 224.133 118.144C225.194 116.872 226.272 115.617 227.316 114.329C228.773 112.543 230.205 110.732 231.67 108.955C233.22 107.061 234.778 105.182 236.361 103.313C236.639 102.984 237.001 102.572 237.38 102.504C237.818 102.429 238.5 102.538 238.736 102.833C238.93 103.077 238.787 103.843 238.526 104.163C236.024 107.237 233.473 110.269 230.921 113.293C230.517 113.773 230.517 114.118 230.895 114.64C232.942 117.411 234.938 120.215 236.968 122.995C237.431 123.626 237.684 124.25 236.959 124.789C236.269 125.302 235.637 124.974 235.191 124.342C233.767 122.313 232.369 120.266 230.954 118.228C230.382 117.411 229.784 116.611 229.093 115.659L229.102 115.685Z" fill="#F5F0EA"/>
              {/* H */}
              <path d="M318.668 114.497C314.457 114.497 310.423 114.505 306.397 114.488C305.724 114.488 305.597 114.808 305.606 115.39C305.631 118.085 305.606 120.771 305.648 123.466C305.656 124.308 305.581 125.024 304.553 125.1C303.812 125.159 303.34 124.553 303.349 123.508C303.391 116.889 303.458 110.261 303.517 103.641C303.517 102.925 303.711 102.26 304.561 102.268C305.404 102.268 305.597 102.925 305.597 103.65V112.476H318.23C318.23 109.57 318.23 106.782 318.23 103.995C318.23 103.86 318.23 103.717 318.222 103.582C318.18 102.849 318.205 102.117 319.182 102.1C320.192 102.083 320.268 102.833 320.302 103.607C320.411 106.058 320.496 108.5 320.672 110.943C320.917 114.413 321.237 117.874 321.515 121.344C321.565 122.034 321.59 122.725 321.557 123.416C321.523 124.174 321.144 124.637 320.31 124.603C319.493 124.569 319.308 124.064 319.266 123.357C319.089 120.468 318.887 117.588 318.677 114.505L318.668 114.497Z" fill="#F5F0EA"/>
              {/* V */}
              <path d="M337.752 125.588C336 125.555 334.358 124.367 333.011 122.708C331.242 120.527 330.366 117.899 329.423 115.314C328.059 111.575 327.772 107.65 327.351 103.751C327.334 103.582 327.334 103.405 327.326 103.237C327.292 102.504 327.486 101.856 328.32 101.83C329.145 101.814 329.347 102.445 329.414 103.178C329.937 108.374 330.745 113.512 333.027 118.27C333.701 119.676 334.653 120.965 335.621 122.194C336.758 123.643 338.367 123.668 339.967 123.163C342.291 122.413 343.647 120.695 344.321 118.421C345.374 114.859 346.376 111.28 347.404 107.717C347.884 106.067 348.372 104.416 348.877 102.774C349.088 102.083 349.501 101.569 350.318 101.797C351.109 102.016 351.311 102.647 351.109 103.355C350.528 105.376 349.888 107.372 349.29 109.385C348.254 112.88 347.353 116.417 346.174 119.862C344.953 123.416 341.761 125.588 337.735 125.605L337.752 125.588Z" fill="#F5F0EA"/>
              {/* A */}
              <path d="M370.438 101.991C374.185 102.058 376.636 104.214 378.194 107.305C380.754 112.383 382.38 117.782 382.784 123.5C382.851 124.469 382.388 125.184 381.655 125.168C380.788 125.142 380.544 124.57 380.485 123.778C380.131 118.556 378.632 113.638 376.468 108.905C375.726 107.279 374.716 105.881 373.124 104.938C370.892 103.624 368.635 103.768 366.757 105.545C364.407 107.776 362.9 110.547 361.923 113.604C361.022 116.426 360.188 119.264 359.363 122.102C359.169 122.759 359.093 123.449 359.026 124.132C358.967 124.772 358.706 125.201 358.032 125.218C357.299 125.235 356.963 124.746 356.954 124.09C356.937 123.508 357.03 122.919 357.139 122.346C358.041 117.664 359.203 113.065 361.51 108.838C362.673 106.707 364.02 104.736 366.058 103.304C367.389 102.37 368.821 101.948 370.429 101.974L370.438 101.991Z" fill="#F5F0EA"/>
              {/* A */}
              <path d="M267.454 124.645C267.278 124.476 266.831 124.215 266.654 123.836C266.259 122.96 265.981 122.034 265.686 121.124C264.229 116.678 262.789 112.231 261.332 107.792C261.214 107.439 261.003 107.11 260.818 106.782C259.075 103.784 256.27 103.531 253.845 106.074C251.916 108.104 250.821 110.597 249.912 113.157C248.91 116.012 248.109 118.926 247.234 121.823C247.015 122.548 246.838 123.289 246.711 124.038C246.594 124.771 246.223 125.217 245.482 125.108C244.631 124.982 244.48 124.325 244.665 123.609C245.482 120.476 246.307 117.351 247.166 114.235C247.966 111.33 249.137 108.576 250.889 106.117C252.918 103.262 255.554 101.687 259.218 102.386C260.607 102.647 261.424 103.615 262.166 104.651C263.732 106.841 264.456 109.418 265.256 111.944C266.435 115.65 267.581 119.356 268.743 123.07C269.029 123.971 268.575 124.678 267.454 124.645Z" fill="#F5F0EA"/>
              {/* Outer Mandala Arch */}
              <path d="M222.752 144.749C214.245 144.488 209.622 137.725 209.091 129.834C207.104 118.448 205.891 106.017 201.006 95.3465C197.216 87.1521 186.378 88.6006 180.878 94.3696C172.431 103.617 171.942 117.445 169.5 129.186C163.925 136.588 169.332 95.5487 181.552 90.0155C202.303 79.9093 206.649 100.349 209.824 116.494C211.643 124.486 210.287 135.207 217.437 140.942C224.874 146.097 231.729 139.031 233.085 131.628C237.97 127.358 234.584 145.709 222.752 144.741V144.749Z" fill="#F5F0EA"/>
              {/* Inner Waves */}
              <path d="M191.869 135.787C186.268 135.045 181.055 132.62 177.45 129.26C176.355 128.114 174.781 126.792 174.503 125.15C174.469 123.945 175.614 123.886 176.305 124.712C183.48 133.302 194.808 137.016 202.733 127.609C204.484 126.186 206.043 127.643 204.543 129.352C201.057 133.361 196.677 135.82 191.86 135.795L191.869 135.787Z" fill="#F5F0EA"/>
              <path d="M190.176 128.258C185.064 128.106 180.491 125.479 177.846 120.881C177.08 119.676 177.922 117.647 179.295 119.179C181.417 122.506 184.558 125.277 188.416 125.529C197.528 127.214 199.954 118.699 202.345 120.662C202.286 126.06 194.74 128.165 190.176 128.258Z" fill="#F5F0EA"/>
              <path d="M190.715 121.704C188.349 122.335 179.413 117.072 182.234 114.217C183.06 113.846 183.666 114.992 184.079 115.59C185.772 118.453 190.218 120.887 193.149 118.335C199.626 109.256 199.28 121.999 190.724 121.712L190.715 121.704Z" fill="#F5F0EA"/>
              <path d="M189.603 115.987C187.295 116.307 186.983 112.567 188.979 111.978C192.635 110.866 193.814 116.239 189.603 115.987Z" fill="#F5F0EA"/>
              {/* WELLNESS FOR MODERN LIFE Lettering */}
              <path d="M279.641 142.416L277.872 137.953L276.07 142.416H275.775L273.939 135.99H274.832L276.036 140.184L277.721 135.99H278.016L279.692 140.184L280.913 135.99H281.805L279.936 142.416H279.641Z" fill="#F5F0EA"/>
              <path d="M283.962 142.416V135.99H287.785V136.841H284.838V138.534H287.76V139.384H284.838V141.566H287.76V142.416H283.962Z" fill="#F5F0EA"/>
              <path d="M289.907 142.416V135.99H290.775V141.574H293.175V142.416H289.907Z" fill="#F5F0EA"/>
              <path d="M295.205 142.416V135.99H296.073V141.574H298.481V142.416H295.205Z" fill="#F5F0EA"/>
              <path d="M305.345 142.416L301.403 137.936V142.416H300.511V135.99H300.822L304.797 140.521V135.99H305.665V142.416H305.345Z" fill="#F5F0EA"/>
              <path d="M308.225 142.416V135.99H312.048V136.841H309.092V138.534H312.023V139.384H309.092V141.566H312.023V142.416H308.225Z" fill="#F5F0EA"/>
              <path d="M315.527 142.566C315.123 142.566 314.752 142.456 314.432 142.246C314.112 142.035 313.809 141.681 313.539 141.193L313.48 141.092L314.222 140.654L314.281 140.763C314.626 141.395 315.03 141.723 315.468 141.723C315.653 141.723 315.839 141.681 315.999 141.597C316.159 141.513 316.285 141.395 316.369 141.252C316.453 141.109 316.495 140.957 316.495 140.797C316.495 140.612 316.437 140.435 316.31 140.258C316.125 139.997 315.771 139.668 315.266 139.29C314.727 138.885 314.407 138.607 314.264 138.422C314.028 138.11 313.91 137.765 313.91 137.403C313.91 137.117 313.977 136.847 314.121 136.603C314.264 136.367 314.466 136.173 314.718 136.03C314.971 135.895 315.249 135.828 315.544 135.828C315.855 135.828 316.159 135.904 316.428 136.064C316.698 136.216 316.984 136.493 317.279 136.898L317.355 136.999L316.647 137.529L316.571 137.437C316.344 137.142 316.159 136.948 316.007 136.856C315.864 136.771 315.704 136.729 315.527 136.729C315.308 136.729 315.131 136.788 314.996 136.923C314.862 137.049 314.794 137.201 314.794 137.395L314.87 137.731L315.156 138.11C315.207 138.161 315.392 138.313 315.948 138.717C316.495 139.121 316.883 139.483 317.093 139.803C317.304 140.132 317.413 140.469 317.413 140.797C317.413 141.277 317.228 141.698 316.858 142.052C316.495 142.406 316.041 142.582 315.519 142.582L315.527 142.566Z" fill="#F5F0EA"/>
              <path d="M321.144 142.566C320.74 142.566 320.369 142.456 320.049 142.246C319.729 142.035 319.426 141.681 319.157 141.193L319.098 141.092L319.839 140.654L319.898 140.763C320.243 141.395 320.647 141.723 321.085 141.723C321.27 141.723 321.456 141.681 321.616 141.597C321.776 141.513 321.902 141.395 321.986 141.252C322.071 141.109 322.113 140.957 322.113 140.797C322.113 140.612 322.054 140.435 321.927 140.258C321.742 139.997 321.388 139.668 320.883 139.29C320.344 138.885 320.024 138.607 319.889 138.422C319.653 138.11 319.536 137.765 319.536 137.403C319.536 137.117 319.611 136.847 319.746 136.603C319.889 136.367 320.091 136.173 320.344 136.03C320.597 135.895 320.875 135.828 321.169 135.828C321.481 135.828 321.784 135.904 322.054 136.064C322.323 136.216 322.61 136.493 322.904 136.898L322.98 136.999L322.273 137.529L322.197 137.437C321.97 137.142 321.784 136.948 321.633 136.856C321.489 136.771 321.329 136.729 321.153 136.729C320.934 136.729 320.757 136.788 320.622 136.923C320.487 137.049 320.42 137.201 320.42 137.395L320.496 137.731L320.782 138.11C320.833 138.161 321.018 138.313 321.574 138.717C322.121 139.121 322.509 139.483 322.719 139.803C322.93 140.132 323.039 140.469 323.039 140.797C323.039 141.277 322.854 141.698 322.483 142.052C322.121 142.406 321.666 142.582 321.144 142.582V142.566Z" fill="#F5F0EA"/>
              <path d="M329.086 142.416V135.99H332.463V136.841H329.962V138.534H332.463V139.384H329.962V142.416H329.086Z" fill="#F5F0EA"/>
              <path d="M337.735 142.566C336.784 142.566 335.958 142.237 335.301 141.589C334.644 140.94 334.308 140.149 334.308 139.222C334.308 138.607 334.459 138.035 334.762 137.512C335.066 136.99 335.478 136.569 335.992 136.274C336.506 135.98 337.078 135.828 337.676 135.828C338.653 135.828 339.479 136.157 340.136 136.797C340.792 137.445 341.129 138.245 341.129 139.188C341.129 140.132 340.792 140.923 340.136 141.58C339.479 142.229 338.67 142.566 337.727 142.566H337.735ZM337.71 136.679C337.272 136.679 336.851 136.797 336.455 137.016C336.059 137.243 335.748 137.555 335.529 137.934C335.31 138.321 335.2 138.751 335.2 139.222C335.2 139.93 335.445 140.511 335.933 140.999C336.422 141.479 337.019 141.723 337.71 141.723C338.173 141.723 338.603 141.614 338.999 141.387C339.386 141.168 339.698 140.864 339.917 140.477C340.136 140.098 340.245 139.66 340.245 139.197C340.245 138.734 340.136 138.304 339.917 137.925C339.698 137.555 339.386 137.243 338.99 137.016C338.594 136.788 338.165 136.679 337.718 136.679H337.71Z" fill="#F5F0EA"/>
              <path d="M346.746 142.416L344.498 139.544H344.329V142.416H343.462V135.99H344.826C345.534 135.99 346.005 136.015 346.266 136.074C346.662 136.167 346.991 136.361 347.235 136.656C347.488 136.95 347.614 137.321 347.614 137.759C347.614 138.121 347.53 138.441 347.353 138.71C347.176 138.988 346.932 139.199 346.612 139.334C346.351 139.452 345.997 139.519 345.576 139.536L347.824 142.416H346.738H346.746ZM345.281 138.702C345.677 138.702 345.972 138.668 346.157 138.593C346.334 138.525 346.469 138.416 346.57 138.264C346.671 138.113 346.721 137.944 346.721 137.75C346.721 137.557 346.671 137.405 346.57 137.254C346.469 137.102 346.342 137.001 346.182 136.933C346.014 136.866 345.719 136.832 345.306 136.832H344.329V138.685H345.281V138.702Z" fill="#F5F0EA"/>
              <path d="M359.842 142.416L359.27 138.281L357.206 142.416H356.895L354.806 138.247L354.233 142.416H353.383L354.309 135.99H354.596L357.055 140.909L359.489 135.99H359.775L360.71 142.416H359.842Z" fill="#F5F0EA"/>
              <path d="M366.1 142.566C365.148 142.566 364.323 142.237 363.666 141.589C363.009 140.94 362.672 140.149 362.672 139.222C362.672 138.607 362.823 138.035 363.127 137.512C363.43 136.99 363.843 136.569 364.356 136.274C364.87 135.98 365.443 135.828 366.041 135.828C367.018 135.828 367.843 136.157 368.5 136.797C369.157 137.445 369.494 138.245 369.494 139.188C369.494 140.132 369.157 140.923 368.5 141.58C367.843 142.229 367.034 142.566 366.091 142.566H366.1ZM366.074 136.679C365.636 136.679 365.215 136.797 364.819 137.016C364.424 137.243 364.112 137.555 363.893 137.934C363.674 138.321 363.565 138.751 363.565 139.222C363.565 139.93 363.809 140.511 364.297 140.999C364.786 141.479 365.384 141.723 366.074 141.723C366.538 141.723 366.967 141.614 367.363 141.387C367.75 141.168 368.062 140.864 368.281 140.477C368.5 140.098 368.609 139.66 368.609 139.197C368.609 138.734 368.5 138.304 368.281 137.925C368.062 137.555 367.75 137.243 367.354 137.016C366.959 136.788 366.529 136.679 366.083 136.679H366.074Z" fill="#F5F0EA"/>
              <path d="M371.793 142.416V135.99H373.208C374.168 135.99 374.842 136.066 375.28 136.218C375.911 136.437 376.408 136.816 376.762 137.355C377.116 137.894 377.292 138.542 377.292 139.275C377.292 139.915 377.149 140.479 376.871 140.968C376.593 141.456 376.223 141.827 375.768 142.054C375.322 142.29 374.69 142.408 373.898 142.408H371.793V142.416ZM373.233 141.582C374.084 141.582 374.673 141.532 374.993 141.431C375.431 141.288 375.785 141.035 376.038 140.664C376.29 140.294 376.417 139.831 376.417 139.292C376.417 138.727 376.273 138.23 376.004 137.835C375.726 137.439 375.347 137.161 374.85 137.009C374.471 136.9 373.831 136.841 372.955 136.841H372.635V141.582H373.233Z" fill="#F5F0EA"/>
              <path d="M379.55 142.416V135.99H383.373V136.841H380.426V138.534H383.348V139.384H380.426V141.566H383.348V142.416H379.55Z" fill="#F5F0EA"/>
              <path d="M388.814 142.416L386.565 139.544H386.397V142.416H385.529V135.99H386.894C387.601 135.99 388.073 136.015 388.334 136.074C388.73 136.167 389.058 136.361 389.302 136.656C389.555 136.95 389.681 137.321 389.681 137.759C389.681 138.121 389.597 138.441 389.42 138.71C389.252 138.988 388.999 139.199 388.679 139.334C388.418 139.452 388.064 139.519 387.643 139.536L389.892 142.416H388.805H388.814ZM387.348 138.702C387.744 138.702 388.039 138.668 388.224 138.593C388.401 138.525 388.536 138.416 388.637 138.264C388.738 138.113 388.789 137.944 388.789 137.75C388.789 137.557 388.738 137.405 388.637 137.254C388.536 137.102 388.41 137.001 388.25 136.933C388.081 136.866 387.786 136.832 387.374 136.832H386.397V138.685H387.348V138.702Z" fill="#F5F0EA"/>
              <path d="M396.89 142.416L392.948 137.936V142.416H392.056V135.99H392.376L396.351 140.521V135.99H397.21V142.416H396.89Z" fill="#F5F0EA"/>
              <path d="M403.459 142.416V135.99H404.335V141.574H406.735V142.416H403.459Z" fill="#F5F0EA"/>
              <path d="M409.539 135.99H408.672V142.416H409.539V135.99Z" fill="#F5F0EA"/>
              <path d="M412.016 142.416V135.99H415.384V136.841H412.883V138.534H415.384V139.384H412.883V142.416H412.016Z" fill="#F5F0EA"/>
              <path d="M417.516 142.416V135.99H421.339V136.841H418.391V138.534H421.314V139.384H418.391V141.566H421.314V142.416H417.516Z" fill="#F5F0EA"/>
              {/* I */}
              <path d="M421.17 119.568C421.17 121.051 421.356 122.171 421.347 123.653C421.347 124.605 420.867 125.211 420.151 125.127C419.301 125.026 419.073 124.428 419.057 123.645C418.947 117.059 418.829 110.464 418.72 103.878C418.72 103.71 418.72 103.533 418.737 103.365C418.812 102.657 419.149 102.177 419.907 102.186C420.665 102.186 421.036 102.674 421.053 103.382C421.095 105.074 421.103 106.767 421.112 108.452C421.112 112.039 421.162 115.61 421.162 119.198C421.17 119.324 421.162 119.4 421.179 119.568H421.17Z" fill="#F5F0EA"/>
            </svg>
          </button>
        </div>

        {/* Right Side: 3-Column Navigation Grid */}
        <div className="akashvani-footer-nav-grid">
          
          {/* Column 1: EXPLORE */}
          <div className="akashvani-footer-col">
            <h4 className="akashvani-footer-col-title">EXPLORE</h4>
            <ul className="akashvani-footer-links">
              <li>
                <button 
                  type="button" 
                  className="akashvani-footer-link"
                  onClick={() => scrollToSection('services-process')}
                >
                  How it works
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="akashvani-footer-link"
                  onClick={() => scrollToSection('choose-guidance')}
                >
                  Support formats
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="akashvani-footer-link"
                  onClick={() => scrollToSection('akashvani-journal')}
                >
                  The Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: TRUST */}
          <div className="akashvani-footer-col">
            <h4 className="akashvani-footer-col-title">TRUST</h4>
            <ul className="akashvani-footer-links">
              <li>
                <button 
                  type="button" 
                  className="akashvani-footer-link"
                  onClick={() => setActiveModal('verification')}
                >
                  Verification standard
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="akashvani-footer-link"
                  onClick={() => setActiveModal('evidence')}
                >
                  Evidence labels
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="akashvani-footer-link"
                  onClick={() => setActiveModal('privacy')}
                >
                  Privacy by default
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: AKASHVANI */}
          <div className="akashvani-footer-col">
            <h4 className="akashvani-footer-col-title">AKASHVANI</h4>
            <ul className="akashvani-footer-links">
              <li>
                <button 
                  type="button" 
                  className="akashvani-footer-link"
                  onClick={() => scrollToSection('meet-the-team')}
                >
                  Practitioners
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="akashvani-footer-link"
                  onClick={() => setActiveModal('sangat')}
                >
                  Sangat — coming carefully
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className="akashvani-footer-link"
                  onClick={() => setActiveModal('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Legal & Boundary Notice Bar */}
      <div className="akashvani-footer-bottom">
        <div className="akashvani-footer-bottom-inner">
          <p className="akashvani-footer-copyright">
            &copy; 2026 Akashvani Wellness. A community built with boundaries.
          </p>
          <p className="akashvani-footer-disclaimer">
            This is reflection, not emergency care.
          </p>
        </div>
      </div>

      {/* ==========================================================================
          Footer Interactive Modals
          ========================================================================== */}
      {activeModal && (
        <div className="footer-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="footer-modal" onClick={e => e.stopPropagation()}>
            <button className="footer-modal-close" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>

            {/* Modal: Verification Standard */}
            {activeModal === 'verification' && (
              <div className="footer-modal-content">
                <span className="footer-modal-badge">Akashvani Trust Framework</span>
                <h3 className="footer-modal-title">Our Verification Standard</h3>
                <p className="footer-modal-p">
                  Every astrological interpretation and remedial system at Akashvani undergoes a dual-layer verification protocol:
                </p>
                <div className="footer-modal-card-list">
                  <div className="footer-modal-card">
                    <h4>1. Canonical Textual Alignment</h4>
                    <p>Calculations adhere strictly to classic treatises including <em>Brihat Parashara Hora Shastra</em> and <em>Jaimini Upadesha Sutras</em>, avoiding superficial pop-astrology heuristics.</p>
                  </div>
                  <div className="footer-modal-card">
                    <h4>2. Senior Practitioner Peer Review</h4>
                    <p>All complex chart synthesis (especially Mahadasha transitions and Sade Sati analyses) are cross-verified by lineage-trained masters with over 15+ years of practical sadhana.</p>
                  </div>
                </div>
                <button type="button" className="footer-modal-btn" onClick={closeModal}>Understood</button>
              </div>
            )}

            {/* Modal: Evidence Labels */}
            {activeModal === 'evidence' && (
              <div className="footer-modal-content">
                <span className="footer-modal-badge">Methodology & Sources</span>
                <h3 className="footer-modal-title">Evidence & Classical References</h3>
                <p className="footer-modal-p">
                  We categorize insights with clear epistemology so you always know the root source of every reading:
                </p>
                <div className="footer-modal-card-list">
                  <div className="footer-modal-card">
                    <h4>• Graha & Bhava Principles</h4>
                    <p>Direct planetary geometry from the Lahiri (Chitra Paksha) Ayanamsha astronomical ephemeris.</p>
                  </div>
                  <div className="footer-modal-card">
                    <h4>• Remedial Protocols</h4>
                    <p>Prescribed gemology, mantra japa counts, and dietary rhythms referenced directly from Ayurvedic & Vedic Samhitas.</p>
                  </div>
                </div>
                <button type="button" className="footer-modal-btn" onClick={closeModal}>Close</button>
              </div>
            )}

            {/* Modal: Privacy by Default */}
            {activeModal === 'privacy' && (
              <div className="footer-modal-content">
                <span className="footer-modal-badge">Privacy & Sacred Trust</span>
                <h3 className="footer-modal-title">Privacy by Default</h3>
                <p className="footer-modal-p">
                  Your birth data represents your personal cosmic energetic footprint. We protect it with zero-compromise security:
                </p>
                <div className="footer-modal-card-list">
                  <div className="footer-modal-card">
                    <h4>🔒 Zero-Data Monetization</h4>
                    <p>Your birth date, birth time, coordinates, and personal inquiries are never sold, shared, or indexed by third parties.</p>
                  </div>
                  <div className="footer-modal-card">
                    <h4>🛡️ Encrypted & Confidential</h4>
                    <p>All consultations and chart archives remain strictly confidential between you and your appointed practitioner.</p>
                  </div>
                </div>
                <button type="button" className="footer-modal-btn" onClick={closeModal}>Close</button>
              </div>
            )}

            {/* Modal: Sangat */}
            {activeModal === 'sangat' && (
              <div className="footer-modal-content">
                <span className="footer-modal-badge">Community Circle</span>
                <h3 className="footer-modal-title">Sangat — Coming Carefully</h3>
                <p className="footer-modal-p">
                  Sangat is our intimate, invite-only community for intentional seekers, monthly live Vedic satsangs, and lunar alignment circles.
                </p>
                {!sangatSuccess ? (
                  <form onSubmit={handleSangatSubmit} className="footer-modal-form">
                    <input 
                      type="email" 
                      required 
                      placeholder="Enter your email to request early invitation..."
                      value={sangatEmail}
                      onChange={e => setSangatEmail(e.target.value)}
                      className="footer-modal-input"
                    />
                    <button type="submit" className="footer-modal-btn">Request Invitation</button>
                  </form>
                ) : (
                  <div className="footer-modal-success-box">
                    <p>✨ <strong>Thank you.</strong> We have recorded your invitation request for {sangatEmail}. We will notify you as soon as the next cohort opens.</p>
                  </div>
                )}
              </div>
            )}

            {/* Modal: Contact */}
            {activeModal === 'contact' && (
              <div className="footer-modal-content">
                <span className="footer-modal-badge">Connect With Us</span>
                <h3 className="footer-modal-title">Get in Touch with Akashvani</h3>
                <p className="footer-modal-p">
                  Have a question about your chart, choosing the right consultation format, or need assistance? Our care team is here for you.
                </p>
                {!contactSuccess ? (
                  <form onSubmit={handleContactSubmit} className="footer-modal-form">
                    <input 
                      type="email" 
                      required 
                      placeholder="Your email address *"
                      value={contactEmail}
                      onChange={e => setContactEmail(e.target.value)}
                      className="footer-modal-input"
                    />
                    <textarea 
                      required 
                      rows="3"
                      placeholder="How can we assist your journey today? *"
                      value={contactMessage}
                      onChange={e => setContactMessage(e.target.value)}
                      className="footer-modal-textarea"
                    />
                    <button type="submit" className="footer-modal-btn">Send Message</button>
                  </form>
                ) : (
                  <div className="footer-modal-success-box">
                    <p>🙏 <strong>Message Received.</strong> Our team will review your inquiry and get back to you at {contactEmail} within 24 hours.</p>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      )}

    </footer>
  );
}
