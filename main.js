let pdfs = {
  143: "https://drive.google.com/file/d/1MczMsDICd-Y9CLX3CDvVnBxuE_uFL_KY/preview",
  144: "https://drive.google.com/file/d/1C6JgPUZ9Qsq6HhM665NQRq_58CkbW8zb/preview",
  170: "https://drive.google.com/file/d/1z-RZL3B5ZeGjmgluIIghCKY38A0DG8J1/preview",
  175: "https://drive.google.com/file/d/1-jVQMe_UJpKOmK43W3SGxesgc31vmdBD/preview",
  2751: "https://drive.google.com/file/d/1gv7b8gbX35o_EcyI9SJZ_luNFxy14tZM/preview",
  2752: "https://drive.google.com/file/d/19yimVaYT8b7ygDoR1oVsy9BwjATJLWxW/preview",
  287: "https://drive.google.com/file/d/11OnKjV_p8WmB9UEv0rXqoW7eup9Ejg2e/preview",
  301: "https://drive.google.com/file/d/18zUwEuIOQcqktCXmJaGTN4dtAwCkva-1/preview",
  h301: "https://drive.google.com/file/d/1eMDL3k81bnGufLIc7U6KoeCIkt1rPo0d/preview",
  a301: "https://drive.google.com/file/d/1BkSB5KrrFDtRhstaeqhfQ1bu0yKvoJr-/preview",
  t301: "https://drive.google.com/file/d/1XmEbVVmv18_T-_PjkWIvsUueJqx09YTE/preview",
  314: "https://drive.google.com/file/d/1TY8zuDh1oi5RxtjZTdsmS492_R8zC9yf/preview",
  333: "https://drive.google.com/file/d/1l4SI44ev3ElwPK8DKZBWbFg9QnpOh4zO/preview",
  q333: "https://drive.google.com/file/d/193rgf47qmyEk9xnsDhixPhByzcYk8JBS/preview",
  t333: "https://drive.google.com/file/d/1J17-eahV1lnEONnleNFa3-pBgOf9o2_7/preview",
  361: "https://drive.google.com/file/d/1tpc6xmjlNb5cnlTEiGTa-3kIzTBmSnRK/preview", //needs changed
  h361: "https://drive.google.com/file/d/1tpc6xmjlNb5cnlTEiGTa-3kIzTBmSnRK/preview",
  t361: "https://drive.google.com/file/d/1tpc6xmjlNb5cnlTEiGTa-3kIzTBmSnRK/preview",
  365: "https://drive.google.com/file/d/1Elj0ippFo6I6XXopugNqCqVur-XsKQj1/preview",
  h365: "https://drive.google.com/file/d/1lZJWFUmQnU623SEbF0rwtNAnzb67iwea/preview",
  403: "https://drive.google.com/file/d/1PxLfc1G9DZRV96osinaIml0kaGe0t8CZ/preview",
  h403: "https://drive.google.com/file/d/10mOyU_xX-bxIJrCm1DlHNDgc37v6feiD/preview",
  t403: "https://drive.google.com/file/d/10mOyU_xX-bxIJrCm1DlHNDgc37v6feiD/preview", //needs changed
  427: "https://drive.google.com/file/d/1gKdO0dtxaXqzdlnmK2EuqZeGV_MIsNX6/preview",
  h427: "https://drive.google.com/file/d/1X2osR7lxCstbqNKhiiv8xB9t6hAG3weS/preview",
  t427: "https://drive.google.com/file/d/1kdsJsz9ntNo1VAr3rDK6onn-1Eg6YLG8/preview",
  436: "https://drive.google.com/file/d/1fi_ljnNnxqyztTWZHMbRyvlBraOIFEM9/preview",
  h436: "https://drive.google.com/file/d/1Gf0JusamqMk_VcFlKc9tysv_X5d6aNpi/preview",
  t436: "https://drive.google.com/file/d/1l_laEdKswLZzetQN6-ykywYUXttuls1K/preview",
  465: "https://drive.google.com/file/d/1TEqOvZ5w6_YzQmbd-lGASO26MRi6oWp-/preview",
  h465: "https://drive.google.com/file/d/1RYWhGvuVA15hOXxExhGHszLT_0IUdBlt/preview",
  q465: "https://drive.google.com/file/d/1gK4EeVMnfrxO5IHyMlZZEKSmowvXRqsv/preview",
  t465: "https://drive.google.com/file/d/1VuGp1nmxQS3-7s7XIbsRfuJfSZjn48OY/preview",
  senior: "https://drive.google.com/file/d/0BzhRKR0oJlTnNDdZSW1naXdudmRVRTJwUEZTVjQ3b2hQcmMw/preview"
}

function change(key) {
  document.getElementById('pdf').innerHTML = `<iframe src="${pdfs[key]}" width="840px" height="auto"></iframe>`
}