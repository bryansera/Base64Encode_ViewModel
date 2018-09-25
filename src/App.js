import { Base64Encode } from "./Base64Encode";

ViewModel.share({
  encode: {
    unencodeString: "start with nothing",
    encodeString: "",
    doEncodeString() {
      const str = Base64Encode.compressAndEncodeBase64AndUri(
        this.unencodeString()
      );
      this.encodeString(str);
    }
  }
});

App({
  render() {
    <div>
      <Reset />
    </div>;
  }
});

Reset({
  share: { encode: "encode" },
  render() {
    <div>
      <button b="click: encode.doEncodeString">doEncodeString</button>
      <br />
      <h4>unencodeString</h4>
      <textarea rows="10" cols="90" b="value: encode.unencodeString" />
      <h4>encodeString</h4>
      <textarea rows="10" cols="90" b="value: encode.encodeString" />
    </div>;
  }
});
