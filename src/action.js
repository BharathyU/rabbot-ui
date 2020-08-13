import axios from 'axios';

export function fetchReport() {
    return function (dispatch) {

        axios.get(
            '/hello',{
                headers:
                {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function (response) {
               console.log(response);
            })
            .catch(function (err) {

                    console.log(err);
                    // if(err.response.data.errorMessage.indexOf("Product already exists")>0){
                    //     toastr.error("Error", I18n.t("standardMessages.productExists"));
                    // }else{
                    //     toastr.error(I18n.t("standardMessages.errorCode"), I18n.t("standardMessages.error"));
                    // }

            });
    }
}