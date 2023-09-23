$(function(){
    updateRowIds();

})

//本月發生件數 隱藏表單
var happen = $("[name=happen]");

happen.on('click', function () {
    console.log($(this).val());
    if($(this).val() != ""){
        if ($(this).val() == '0') {
            console.log("hide!");
            $("#BODY").hide();
            $("#FOOT").hide();
        }
        if ($(this).val() == '1') {
            console.log("show!");
            $("#BODY").show();
            $("#FOOT").show();
        }
    }
})

//新增row
var plus = $("#plus_btn");
var body = $("#BODY");
var copy = $("#tb1");
var i = 1;

plus.on('click',function(){
    console.log("new row" + i);
    body.append('<tr id="tb' + i + '">' + copy.html() + '</tr>');
    i++;
    updateRowIds();
})

//刪除row
$("body").on("click", ".remove_btn", function () {
    if(i > 1){
        // 找到要删除的行（父级 <tr>）
    var rowToRemove = $(this).closest("tr");
    
    // 删除找到的行
    rowToRemove.remove();
    i--;
    updateRowIds();
    
    }
    else{
        alert("無法再刪除");
    }
    
});

//更新序列
function updateRowIds() {
    var rows = $("#BODY tr");
    
    // 重新为每行分配序列号
    rows.each(function(index) {
        $(this).attr("id", "tb" + (index + 1)); // 更新行的 ID
        $(this).find("input[id^='row_id']").attr("id", "row_id" + (index + 1)) // 更新 row_id 字段的 ID
        .val(index); 

    });
}