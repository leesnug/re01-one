function dianZan() {
  let dianZanShuBiaoQian = window.document.getElementById("dzs");
  let dianZanShu = parseInt(dianZanShuBiaoQian.innerHTML);
  let xinShuZi = dianZanShu + 1;
  dianZanShuBiaoQian.innerText = xinShuZi;
  return;
}
