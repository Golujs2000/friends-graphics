import React from 'react';

/**
 * BrandFavicon Component
 * High-fidelity vector SVG representation of the Friends Graphics 'F' emblem.
 * Features 3D layered fluid ribbons (Yellow, Red, Magenta, Cyan/Blue)
 * and digital pixel mosaic blocks.
 */
export default function BrandFavicon({
  className = "w-12 h-12",
  showText = false,
  textColor = "#64748B"
}) {
  if (showText) {
    return (
      <svg
        viewBox="0 0 500 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="compTopWing" x1="0.88" y1="0.05" x2="0.12" y2="0.95">
            <stop offset="0%" stopColor="#FFE70B" />
            <stop offset="18%" stopColor="#FFB300" />
            <stop offset="50%" stopColor="#FF5D00" />
            <stop offset="82%" stopColor="#F22200" />
            <stop offset="100%" stopColor="#CE1400" />
          </linearGradient>
          <linearGradient id="compTopSheen" x1="0.25" y1="0" x2="0.75" y2="0.85">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
            <stop offset="25%" stopColor="#FFF275" stopOpacity="0.35" />
            <stop offset="65%" stopColor="#FFA800" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="compSecondWing" x1="0.9" y1="0.15" x2="0.1" y2="0.85">
            <stop offset="0%" stopColor="#FF3820" />
            <stop offset="35%" stopColor="#E81242" />
            <stop offset="70%" stopColor="#C20456" />
            <stop offset="100%" stopColor="#880050" />
          </linearGradient>
          <linearGradient id="compMagentaBar" x1="0" y1="0.5" x2="1" y2="0.35">
            <stop offset="0%" stopColor="#55006E" />
            <stop offset="20%" stopColor="#880072" />
            <stop offset="52%" stopColor="#CE006E" />
            <stop offset="80%" stopColor="#F81880" />
            <stop offset="100%" stopColor="#FF4098" />
          </linearGradient>
          <linearGradient id="compMagentaSheen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="35%" stopColor="#FFA6D0" stopOpacity="0.55" />
            <stop offset="75%" stopColor="#FF5C9E" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="compBlueWave" x1="0.05" y1="0.1" x2="0.95" y2="0.65">
            <stop offset="0%" stopColor="#00EEFF" />
            <stop offset="32%" stopColor="#00A8FF" />
            <stop offset="72%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#0044DB" />
          </linearGradient>
          <linearGradient id="compBlueHighlight" x1="0.1" y1="0" x2="0.85" y2="0.8">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#70F5FF" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#0099FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="compBlueStem" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#0094FF" />
            <stop offset="45%" stopColor="#0066FF" />
            <stop offset="80%" stopColor="#004AE0" />
            <stop offset="100%" stopColor="#0035B5" />
          </linearGradient>
          <filter id="compDropShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#1A0022" floodOpacity="0.32" />
          </filter>
        </defs>

        <g>
          {/* Layer 2: Red Wing */}
          <path
            d="M 132 230 C 132 148 168 96 215 76 C 256 58 316 66 355 92 C 378 107 386 122 383 134 C 378 145 352 153 318 156 C 260 162 200 178 165 212 C 146 230 137 252 132 270 Z"
            fill="url(#compSecondWing)"
          />

          {/* Layer 1: Top Yellow Wing */}
          <g>
            <path
              d="M 132 255 C 132 138 185 46 260 38 C 322 32 376 34 412 38 C 416 39 416 44 413 46 C 388 70 355 106 300 118 C 238 131 182 146 132 255 Z"
              fill="url(#compTopWing)"
            />
            <path
              d="M 148 225 C 152 138 195 60 262 46 C 318 36 370 38 406 41 C 372 63 342 88 295 100 C 238 114 182 138 148 225 Z"
              fill="url(#compTopSheen)"
            />
          </g>

          {/* Layer 5: Vertical Blue Stem */}
          <path
            d="M 132 245 C 132 288 131 338 131 365 L 160 365 L 160 393 L 188 393 C 192 380 193 370 193 358 C 205 342 215 316 215 278 C 215 252 214 238 214 228 Z"
            fill="url(#compBlueStem)"
          />

          {/* Layer 4: Cyan / Blue Wave */}
          <g>
            <path
              d="M 132 278 C 140 240 176 218 220 213 C 268 208 315 210 334 216 C 342 219 340 228 332 235 C 305 256 262 270 215 270 C 178 270 146 292 132 318 Z"
              fill="url(#compBlueWave)"
            />
            <path
              d="M 152 270 C 182 238 230 223 280 220 C 310 218 328 221 334 223 C 312 238 276 252 230 254 C 188 256 162 268 152 270 Z"
              fill="url(#compBlueHighlight)"
            />
          </g>

          {/* Layer 3: Magenta Bar */}
          <g filter="url(#compDropShadow)">
            <path
              d="M 132 172 C 168 162 225 157 282 157 C 336 157 368 159 378 163 C 384 166 383 174 377 180 C 356 201 322 217 275 219 C 220 221 168 225 132 276 Z"
              fill="url(#compMagentaBar)"
            />
            <path
              d="M 135 175 C 172 166 228 161 282 161 C 334 161 364 163 374 165 C 360 177 334 191 286 194 C 232 197 174 202 135 242 Z"
              fill="url(#compMagentaSheen)"
            />
          </g>

          {/* Layer 6: Pixel Mosaic */}
          <g>
            <rect x="104" y="281" width="28" height="28" fill="#F59E0B" />
            <rect x="132" y="281" width="28" height="28" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
            <rect x="76" y="309" width="28" height="28" fill="#18181B" />
            <rect x="104" y="309" width="28" height="28" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
            <rect x="132" y="309" width="28" height="28" fill="#F59E0B" />
            <rect x="160" y="309" width="28" height="28" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
            <rect x="104" y="337" width="28" height="28" fill="#F472B6" />
          </g>
        </g>

        <text
          x="250"
          y="492"
          textAnchor="middle"
          fill={textColor}
          fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
          fontSize="33"
          fontWeight="700"
          letterSpacing="0.32em"
        >
          FAVICON
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="50 15 380 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="compIconTopWing" x1="0.88" y1="0.05" x2="0.12" y2="0.95">
          <stop offset="0%" stopColor="#FFE70B" />
          <stop offset="18%" stopColor="#FFB300" />
          <stop offset="50%" stopColor="#FF5D00" />
          <stop offset="82%" stopColor="#F22200" />
          <stop offset="100%" stopColor="#CE1400" />
        </linearGradient>
        <linearGradient id="compIconTopSheen" x1="0.25" y1="0" x2="0.75" y2="0.85">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
          <stop offset="25%" stopColor="#FFF275" stopOpacity="0.35" />
          <stop offset="65%" stopColor="#FFA800" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="compIconSecondWing" x1="0.9" y1="0.15" x2="0.1" y2="0.85">
          <stop offset="0%" stopColor="#FF3820" />
          <stop offset="35%" stopColor="#E81242" />
          <stop offset="70%" stopColor="#C20456" />
          <stop offset="100%" stopColor="#880050" />
        </linearGradient>
        <linearGradient id="compIconMagentaBar" x1="0" y1="0.5" x2="1" y2="0.35">
          <stop offset="0%" stopColor="#55006E" />
          <stop offset="20%" stopColor="#880072" />
          <stop offset="52%" stopColor="#CE006E" />
          <stop offset="80%" stopColor="#F81880" />
          <stop offset="100%" stopColor="#FF4098" />
        </linearGradient>
        <linearGradient id="compIconMagentaSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="35%" stopColor="#FFA6D0" stopOpacity="0.55" />
          <stop offset="75%" stopColor="#FF5C9E" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="compIconBlueWave" x1="0.05" y1="0.1" x2="0.95" y2="0.65">
          <stop offset="0%" stopColor="#00EEFF" />
          <stop offset="32%" stopColor="#00A8FF" />
          <stop offset="72%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#0044DB" />
        </linearGradient>
        <linearGradient id="compIconBlueHighlight" x1="0.1" y1="0" x2="0.85" y2="0.8">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="35%" stopColor="#70F5FF" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#0099FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="compIconBlueStem" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#0094FF" />
          <stop offset="45%" stopColor="#0066FF" />
          <stop offset="80%" stopColor="#004AE0" />
          <stop offset="100%" stopColor="#0035B5" />
        </linearGradient>
        <filter id="compIconShadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#1A0022" floodOpacity="0.32" />
        </filter>
      </defs>

      <g>
        {/* Layer 2: Red Wing */}
        <path
          d="M 132 230 C 132 148 168 96 215 76 C 256 58 316 66 355 92 C 378 107 386 122 383 134 C 378 145 352 153 318 156 C 260 162 200 178 165 212 C 146 230 137 252 132 270 Z"
          fill="url(#compIconSecondWing)"
        />

        {/* Layer 1: Top Yellow Wing */}
        <g>
          <path
            d="M 132 255 C 132 138 185 46 260 38 C 322 32 376 34 412 38 C 416 39 416 44 413 46 C 388 70 355 106 300 118 C 238 131 182 146 132 255 Z"
            fill="url(#compIconTopWing)"
          />
          <path
            d="M 148 225 C 152 138 195 60 262 46 C 318 36 370 38 406 41 C 372 63 342 88 295 100 C 238 114 182 138 148 225 Z"
            fill="url(#compIconTopSheen)"
          />
        </g>

        {/* Layer 5: Vertical Blue Stem */}
        <path
          d="M 132 245 C 132 288 131 338 131 365 L 160 365 L 160 393 L 188 393 C 192 380 193 370 193 358 C 205 342 215 316 215 278 C 215 252 214 238 214 228 Z"
          fill="url(#compIconBlueStem)"
        />

        {/* Layer 4: Cyan / Blue Wave */}
        <g>
          <path
            d="M 132 278 C 140 240 176 218 220 213 C 268 208 315 210 334 216 C 342 219 340 228 332 235 C 305 256 262 270 215 270 C 178 270 146 292 132 318 Z"
            fill="url(#compIconBlueWave)"
          />
          <path
            d="M 152 270 C 182 238 230 223 280 220 C 310 218 328 221 334 223 C 312 238 276 252 230 254 C 188 256 162 268 152 270 Z"
            fill="url(#compIconBlueHighlight)"
          />
        </g>

        {/* Layer 3: Magenta Bar */}
        <g filter="url(#compIconShadow)">
          <path
            d="M 132 172 C 168 162 225 157 282 157 C 336 157 368 159 378 163 C 384 166 383 174 377 180 C 356 201 322 217 275 219 C 220 221 168 225 132 276 Z"
            fill="url(#compIconMagentaBar)"
          />
          <path
            d="M 135 175 C 172 166 228 161 282 161 C 334 161 364 163 374 165 C 360 177 334 191 286 194 C 232 197 174 202 135 242 Z"
            fill="url(#compIconMagentaSheen)"
          />
        </g>

        {/* Layer 6: Pixel Mosaic */}
        <g>
          <rect x="104" y="281" width="28" height="28" fill="#F59E0B" />
          <rect x="132" y="281" width="28" height="28" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
          <rect x="76" y="309" width="28" height="28" fill="#18181B" />
          <rect x="104" y="309" width="28" height="28" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
          <rect x="132" y="309" width="28" height="28" fill="#F59E0B" />
          <rect x="160" y="309" width="28" height="28" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.8" />
          <rect x="104" y="337" width="28" height="28" fill="#F472B6" />
        </g>
      </g>
    </svg>
  );
}
