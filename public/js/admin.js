$(function(){
	$(".del").on("click",function(e){
		var target = $(e.target)
		var id = target.data('id')
		var tr = $(".item-id-"+id)
		$.ajax({
			type:"delete",
			url:"/admin/list?id="+id,
			async:true
		}).done(function(results){
			if(results.success==1){
				if(tr.length>0){
					tr.remove()
				}
			}
		});
		
		
	})
})
