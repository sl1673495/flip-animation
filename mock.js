let SISTERS = [
  'https://pic3.zhimg.com/v2-89735fee10045d51693f1f74369aaa46_r.jpg',
  'https://pic1.zhimg.com/v2-ca51a8ce18f507b2502c4d495a217fa0_r.jpg',
  'https://pic1.zhimg.com/v2-c90799771ed8469608f326698113e34c_r.jpg',
  'https://pic1.zhimg.com/v2-8d3dd83f3a419964687a028de653f8d8_r.jpg',
  'https://pic1.zhimg.com/v2-09eefac19ac282684f60a202aa9abb2c_r.jpg',
  'https://pic3.zhimg.com/v2-a7340ebca1f7a4f65190583b4ab3a482_r.jpg',
  'https://pic2.zhimg.com/v2-37860484a1a73257178e95267c7db641_r.jpg',
  'https://pic2.zhimg.com/v2-7fc30291c807d07d2d26c5a8ffdd3b89_r.jpg',
  'https://pic4.zhimg.com/v2-02efe89495be4f68f6b7b6c510da36cf_r.jpg',
  'https://pic3.zhimg.com/v2-1e375cbcad7ae119c34a1357c9e8f182_r.jpg',
  'https://pic4.zhimg.com/v2-aeadbc3d02af2631e3a7acd0dc72b01b_r.jpg',
  'https://pic3.zhimg.com/v2-a47effc7163387c1ad7ccfc90ec3e91e_r.jpg',
  'https://pic3.zhimg.com/v2-a71fad6a1fee2614ad95a4bae0376eb6_r.jpg',
  'https://pic3.zhimg.com/v2-861f71f28e361237003aa1c88188f326_r.jpg',
  'https://pic4.zhimg.com/v2-525c8002eb619387e7a31f67169f8a2b_r.jpg',
  'https://pic4.zhimg.com/v2-0dcbcf5a48a97afab7439e09af65c98f_r.jpg',
  'https://pic1.zhimg.com/v2-d640737ff5eac65fe30375f324512d00_r.jpg',
  'https://pic1.zhimg.com/v2-6e92b4576b93302ad5fe04c7e95e375c_r.jpg',
  'https://pic1.zhimg.com/v2-5e4a1221996179cbacc5d7450d25f908_r.jpg',
  'https://pic3.zhimg.com/v2-7f58a7d6e8b1ed3f653a96ae9d6e1e2e_r.jpg',
  'https://pic4.zhimg.com/v2-fb767fd3f56591a3c4b2b4089c47776f_r.jpg',
  'https://pic2.zhimg.com/v2-6b9847e11d3a8cac8ac0ef52bffd9af5_r.jpg',
  'https://pic2.zhimg.com/v2-6f2119f99200fc61abc246eea36f25b1_r.jpg',
  'https://pic4.zhimg.com/v2-2103acaf025ceda331a0dd59022443ab_r.jpg',
  'https://pic2.zhimg.com/v2-edc1b118c420939c545b1449344139b5_r.jpg',
  'https://pic2.zhimg.com/v2-d94530f491f23c61659ef458ac8a9db5_r.jpg',
  'https://pic2.zhimg.com/v2-ff15820a9c1cb8e2bb0af1048ea81145_r.jpg',
  'https://pic4.zhimg.com/v2-a8fb0a1d8581e4bfce905791271711c7_r.jpg',
  'https://pic2.zhimg.com/v2-1008cd2c72129809cc348cdc04310475_r.jpg',
]

let initialSize = 8
let randomSize = [1, 2, 3, 4]

function getSisterGenerator() {
  const source = SISTERS.slice()
  let initial = true
  return () => {
    if (initial) {
      initial = false
      return source.splice(0, initialSize)
    }
    const size = Math.round(Math.random() * (randomSize.length - 1))
    return source.splice(0, randomSize[size])
  }
}
