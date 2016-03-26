import hexToRGB from '../src/index'

describe('hexToRGB', () => {
  it('should return 255, 255, 255 for #ffffff', () => {
    expect(hexToRGB('#ffffff')).to.deep.equal({
      r: 255,
      g: 255,
      b: 255
    })
  })

  it('should return 0, 0, 0 for #000000', () => {
    expect(hexToRGB('#000000')).to.deep.equal({
      r: 0,
      g: 0,
      b: 0
    })
  })
})
