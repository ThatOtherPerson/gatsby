import React from "react"

import { FilterIcon, SortIcon } from "../assets/mobile-showcase-navigation-icons"
import SearchIcon from "../assets/search-icon.svg"

import { options, rhythm } from "../utils/typography"
import presets, { colors } from "../utils/presets"

// TODO: add filter and sort functionality

// TODO: currently uses display: none, for hiding components.
// Make use of react-responsive or something.
 
const ShowcaseNavigationMobile = (props) => (
  <div
    css={{
      height: presets.filterNavigationHeight,
      backgroundColor: colors.ui.whisper,
      width: `100%`,
      display: `flex`,
      position: `fixed`,
      zIndex: 1,
      paddingLeft: rhythm(2/3),
      paddingRight: rhythm(1/3),
      [presets.Desktop]: {
        display: `none`,
      }
    }}
  >
    <div
      css={{
        flex: 7,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <label
        css={{
          width: `100%`,
        }}
      >
        <input
          css={{
            position: `relative`,
            borderRadius: presets.radiusLg,
            color: colors.gatsby,
            background: `#FFFFFF url(${SearchIcon}) no-repeat 7px 7px`,
            paddingLeft: rhythm(4 / 3),
            border: `1px solid ${colors.ui.bright}`,
            fontFamily: options.headerFontFamily.join(`,`),
            letterSpacing: 0,
            height: 36,
            width: `100%`,
          }}
          type="text"
          placeholder="Search Showcase"
          aria-label="Search Showcase"
        />
      </label>
    </div>
    <div
      css={{
        flex: 3,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-evenly`,
      }}
    >
      <img
        src={FilterIcon}
        css={{ 
          height: `1rem`,
          margin: `inherit`,
        }}
          alt="Filter Icon"
      />
      <img
        src={SortIcon}
        css={{
          height: `1rem`,
          margin: `inherit`,
        }}
        alt="Sort Icon"
      />
    </div>
  </div>
)

export default ShowcaseNavigationMobile