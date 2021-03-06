# Changelog

## [4.0.0] - 2019-09-21
### Added
- Added a new type of button that can only be used in the header
- Added the `$header-btn-bg` and `$header-btn-color` variables
- Added the `$legend-color` and `$legend-size` variables
- Added the `$switch-disabled-border` and `$switch-disabled-bg` variables
- Added the `$switch-disabled-label` variable
- Added the `$upload-disabled-color`, `$upload-disabled-bg` and `$upload-disabled-border` variables
- Added miscellaneous button variables
- Added ARIA-labels to empty buttons and anchors

### Changed
- [BREAKING] Updated the core branding to meet the WCAG 2.1 AA guidelines
- [BREAKING] Changed the appearance and behaviour of the A logo
- [BREAKING] Changed the behaviour of the `.u-wrapper` class
- [BREAKING] Changed the behaviour of the header
- [BREAKING] Replaced the function of the `$switch-disabled` variable (The previous one is moved to `$switch-disabled-label`)
- [BREAKING] Updated the syntax of the avatar component
- [BREAKING] Updated the syntax of icon and social buttons
- [BREAKING] Updated the syntax of lists with icons
- [BREAKING] Updated the syntax of the table component
- [BREAKING] Updated the syntax of the tag components with buttons in it
- [BREAKING] Updated the syntax of the toggle component
- [BREAKING] Updated the syntax of the alerts
- [BREAKING] Updated the syntax of the button list component
- [BREAKING] Updated the syntax of the datepicker component
- [BREAKING] Updated the syntax of the pagination component
- [BREAKING] Updated the syntax of the upload component
- [BREAKING] Updated the syntax of the header component
- [BREAKING] Updated the syntax of the tag list component
- [BREAKING] Added some letterspacing to the label component
- [BREAKING] Updated the syntax for all icons: `<span>` instead of the incorrect `<i>`
- changed the behaviour of the a element
- Made `$grey-dark` slightly darker
- Made the background of the kbd element darker
- Updated the appearance of the legend element
- Updated the appearance of both enabled and disabled form elements
- Made the background of avatars darker
- Updated the appearance of the badge component
- Updated the appearance of most button components
- Made the border of the different input states darker
- Updated the appearance of the label component
- Updated the appearance of the switch component
- Updated the appearance of the datepicker component
- Updated the appearance of the navigation components
- Updated the appearance of the upload component
- Updated the documentation for the collapsible list component
- Updated the appearance of the tag component

### Removed
- [BREAKING] Removed the `$font-size-ti` and `$font-size-xs` variables
- [BREAKING] Removed the `$font-size-ti` and `$font-size-xs` variables
- [BREAKING] Removed the ability to make the header fixed
- [BREAKING] Removed the negative success, warning and danger buttons
- Removed font-smoothing as it had unexpected results in different browsers


## [3.2.2] - 2019-06-03
### Changed
- Updated Facebook color


## [3.2.1] - 2019-05-10
### Fixed
- Fixed cookie consent not hiding when consented


## [3.2.0] - 2019-04-08
### Added
- Added vertical button group

### Fixed
- Fixed a small layout issue in (horizontal) button groups


## [3.1.0] - 2019-02-07
### Added
- Added support for multiple lines of text in buttons


## [3.0.3] - 2018-11-06
### Fixed
- Optimized the layout of the search filter component a bit more


## [3.0.2] - 2018-10-25
### Fixed
- Fixed an issue where the upload zone would break out of its boundaries
- Optimized the layout of the search filter component


## [3.0.1] - 2018-10-08
### Fixed
- Added the AUI-kit source files to the build folder


## [3.0.0] - 2018-10-08
### Changed
- [BREAKING] Added AUI-kit as part of the core branding


## [2.3.0] - 2018-08-16
### Changed
- Changed the behaviour of focused elements
- Changed the overall focus color
- Changed the input placeholder to be WCAG 2.0 compatible

### Fixed
- Fixed checkboxes and radio buttons not being focusable


## [2.2.0] - 2018-07-23
### Changed
- Changed the appearance of the disabled button

### Added
- Added breakpoints for XL screens
- Added a disabled state for the upload molecule
- Added a getting started guide in the documentation
- Added an easy TOC in the documentation

## [2.1.1] - 2018-04-26
### Fixed
- Fixed an issue where the `:not` selector wasn't rendered correctly


## [2.1.0] - 2018-04-26
### Fixed
- Added a missing part of the Antwerp font EULA

### Added
- Added small and large size variants for pagination


## [2.0.4] - 2018-04-17
### Fixed
- Fixed an issue where tags would display incorrectly in smaller containers
- Fixed an issue in Firefox where the responsive table wrapper would break out the flexbox setup

### Added
- Added full width buttons to the docs


## [2.0.3] - 2018-03-30
### Added
- Added option to also use buttons in navigation tabs instead of only anchors


## [2.0.2] - 2018-03-16
### Fixed
- Fixed an issue where alignment classes weren't working in table headings and table cells


## [2.0.1] - 2018-01-22
### Fixed
- Fixed next link in pagination is now clickable
- Fixed pagination cursor is now also a pointer in Chrome and Firefox


## [2.0.0] - 2018-01-17
### Added
- Added disabled state to pagination, list and tab navigation

### Changed
- [BREAKING] Changed the markup for pagination
- [BREAKING] Changed the markup for avatars
- [BREAKING] Changed the markup for list and tab navigation


## [1.3.1] - 2017-12-06
### Fixed
- Fixed a typo which prevented the 'Antwerpen' font from loading


## [1.3.0] - 2017-12-04
### Added
- Added a collapsible list
- Added table cell padding options
- Added a hover option for table rows
- Added an option to use the base font for a heading
- Added small and large size variants for input fields
- Added updated versions of the Antwerpen web fonts

### Changed
- Made `.a-input` less specific for easier overriding
- Made input fields more configurable

### Fixed
- Fixed nested flyouts from opening all when the highest in order is opened
- Fixed the repsonsive 'max' variables
- Fixed a placeholder rendering issue
- Fixed an issue where the `.u-container` would collapse


## [1.2.1] - 2017-11-28
### Fixed
- Fixed the color of placeholders that was lighter in Firefox


## [1.2.0] - 2017-11-13
### Added
- Added the possibility to import custom Antwerp fonts only
- Added local options for the custom Antwerp fonts
- Added an option for the flyout's dropshadow placement
- Added option to use buttons in navigation lists instead of anchors
- Added an inline version of the select component

### Fixed
- Fixed default border radius issue on buttons in Google Chrome (62)
- Fixed a datepicker layout issue
- Fixed an issue where the 'uncompressed' version of the core branding was also compressed


## [1.1.0] - 2017-10-11
### Added
- Added a small and large variant of the spinner
- Added a changelog

### Changed
- Improved the accessibility of the input placeholder
- Made the spinner spin a bit faster
- Changed the way NPM handles the package


## [1.0.0] - 2017-06-19
- Initial release.


[4.0.0]: https://github.com/a-ui/core_branding_scss/tree/v4.0.0
[3.2.2]: https://github.com/a-ui/core_branding_scss/tree/v3.2.2
[3.2.1]: https://github.com/a-ui/core_branding_scss/tree/v3.2.1
[3.2.0]: https://github.com/a-ui/core_branding_scss/tree/v3.2.0
[3.1.0]: https://github.com/a-ui/core_branding_scss/tree/v3.1.0
[3.0.3]: https://github.com/a-ui/core_branding_scss/tree/v3.0.3
[3.0.2]: https://github.com/a-ui/core_branding_scss/tree/v3.0.2
[3.0.1]: https://github.com/a-ui/core_branding_scss/tree/v3.0.1
[3.0.0]: https://github.com/a-ui/core_branding_scss/tree/v3.0.0
[2.3.0]: https://github.com/a-ui/core_branding_scss/tree/v2.3.0
[2.2.0]: https://github.com/a-ui/core_branding_scss/tree/v2.2.0
[2.1.1]: https://github.com/a-ui/core_branding_scss/tree/v2.1.1
[2.1.0]: https://github.com/a-ui/core_branding_scss/tree/v2.1.0
[2.0.4]: https://github.com/a-ui/core_branding_scss/tree/v2.0.4
[2.0.3]: https://github.com/a-ui/core_branding_scss/tree/v2.0.3
[2.0.2]: https://github.com/a-ui/core_branding_scss/tree/v2.0.2
[2.0.1]: https://github.com/a-ui/core_branding_scss/tree/v2.0.1
[2.0.0]: https://github.com/a-ui/core_branding_scss/tree/v2.0.0
[1.3.1]: https://github.com/a-ui/core_branding_scss/tree/v1.3.1
[1.3.0]: https://github.com/a-ui/core_branding_scss/tree/v1.3.0
[1.2.1]: https://github.com/a-ui/core_branding_scss/tree/v1.2.1
[1.2.0]: https://github.com/a-ui/core_branding_scss/tree/v1.2.0
[1.1.0]: https://github.com/a-ui/core_branding_scss/tree/v1.1.0
[1.0.0]: https://github.com/a-ui/core_branding_scss/tree/v1.0.0
