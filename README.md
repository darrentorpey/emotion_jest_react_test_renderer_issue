Demonstrating a problem with using emotion's styled with Jest and react-test-renderer

If you export `AvatarStyled` instead of `AvatarCSS` the Jest test fails with an error message:

> Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object.
