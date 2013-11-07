class RealKickHelperUtils

  getClassFromName: (className) =>
    @getObjectFromString className

  getObjectFromString: (str) =>
    strArray = str.split '.'

    obj = window || this
    _.each strArray, (strArrayElement) =>
      obj = obj[strArrayElement]
    obj

RealKick.Helper.Utils = new RealKickHelperUtils()