function openZipSearch() {
	new daum.Postcode({
		oncomplete: function(data) {
			$('[name=join_address0]').val(data.zonecode); // 우편번호 (5자리)
			$('[name=join_address1]').val(data.address);
			$('[name=join_address2]').val(data.buildingName);
		}
	}).open();
}