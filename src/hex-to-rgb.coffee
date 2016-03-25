module.exports = (hex) ->
  result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if result then {
    r: parseInt(result[1], 16)
    g: parseInt(result[2], 16)
    b: parseInt(result[3], 16)
  } else null

