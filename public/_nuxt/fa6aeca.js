(window.webpackJsonp=window.webpackJsonp||[]).push([[44,12],{600:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return v})),n.d(e,"b",(function(){return x})),n.d(e,"e",(function(){return w})),n.d(e,"f",(function(){return k})),n.d(e,"c",(function(){return y}));var o,l,c,r,m,d,f=n(91),_=n(58),h=Object(_.a)(o||(o=Object(f.a)(["\n  query($page: Int!, $per_page: Int!) {\n    bankAccounts(first: $per_page, page: $page) {\n      data {\n         id\n         account_number\n         initial_balance\n         balance\n         description\n         bank_id\n         branch\n         check_image_url\n         check_template_data\n         bank {\n          id\n          name\n         }\n      }\n    }   \n  }\n"]))),v=Object(_.a)(l||(l=Object(f.a)(["\n  query($id: ID!) {\n    bankAccount(id: $id) {\n      id\n      account_number\n      initial_balance\n      balance\n      description\n      bank_id\n      branch\n      check_image_url\n      check_template_data\n      total_payment\n      total_deposit\n      payments {\n        id\n        to\n        amount_in_words\n        transaction_date\n        bank_account_id\n        reason\n        project\n        payment_method\n        transaction_amount\n        voided\n        voided_date\n        voided_reason\n        payment_date\n        payment_pending\n        bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n        }\n      }\n      deposits {\n        id\n        transaction_amount\n        transaction_date\n        bank_account_id\n        reference_no\n        check_type\n        currency\n        project\n        reason\n        bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n        }\n      }\n      bank {\n        id\n        name\n      }\n    }\n  }\n"]))),x=Object(_.a)(c||(c=Object(f.a)(["\n  mutation($account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n    $check_image: Upload) {\n    createBankAccount(input: {account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, balance: $balance,\n       description: $description, check_image: $check_image}) {\n      id\n      account_number\n    }\n  }\n"]))),w=Object(_.a)(r||(r=Object(f.a)(["\n  mutation($id: ID!, $account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n  $check_image: Upload, $check_template_data: JSON) {\n    updateBankAccount(input: {id: $id, account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, \n      balance: $balance, description: $description, check_image: $check_image, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),k=Object(_.a)(m||(m=Object(f.a)(["\n  mutation($id: ID!, $check_template_data: JSON) {\n    updateBankAccountTemplate(input: {id: $id, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),y=Object(_.a)(d||(d=Object(f.a)(["\n  mutation($id: ID!) {\n    deleteBankAccount(id: $id) {\n        id\n        account_number\n    }   \n  }\n"])))},602:function(t,e,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("f04981f0",content,!0,{sourceMap:!1})},605:function(t,e,n){var content=n(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b9f570ac",content,!0,{sourceMap:!1})},608:function(t,e,n){"use strict";n.d(e,"a",(function(){return k})),n.d(e,"f",(function(){return y})),n.d(e,"g",(function(){return $})),n.d(e,"d",(function(){return O})),n.d(e,"h",(function(){return j})),n.d(e,"e",(function(){return S})),n.d(e,"i",(function(){return P})),n.d(e,"c",(function(){return C})),n.d(e,"b",(function(){return D}));var o,l,c,r,m,d,f,_,h,v,x=n(91),w=n(58),k=Object(w.a)(o||(o=Object(x.a)(["\n  query($page: Int!, $per_page: Int!, $voided: Boolean, $payment_pending: Boolean, $approved: Boolean, $search: String) {\n    payments(first: $per_page, page: $page, voided: $voided, pending: $payment_pending, search: $search, approved: $approved) {\n      data {\n         id\n         to\n         amount_in_words\n         transaction_date\n         bank_account_id\n         reason\n         project\n         payment_method\n         transaction_amount\n         voided\n         voided_date\n         voided_reason\n         payment_date\n         payment_pending\n         checked_by_id\n         checked_at\n         checked\n         approved_by_id\n         approved_at\n         approved\n         invoice_number\n         cheque_number\n         bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),y=Object(w.a)(l||(l=Object(x.a)(["\n  query($id: ID!) {\n    payment(id: $id) {\n      id\n      to\n      amount_in_words\n      transaction_date\n      bank_account_id\n      reason\n      project\n      payment_method\n      transaction_amount\n      voided\n      voided_date\n      voided_reason\n      checked_by_id\n      checked_at\n      checked\n      approved_by_id\n      approved_at\n      approved\n      payment_date\n      payment_pending\n      invoice_number\n      cheque_number\n      bankAccount {\n        id\n        account_number\n        check_image_url\n        check_template_data\n        bank {\n          id\n          name\n        }\n      }\n    }   \n  }\n"]))),$=Object(w.a)(c||(c=Object(x.a)(["\n  query {\n    paymentPersons {\n      to\n    }\n  }\n"]))),O=Object(w.a)(r||(r=Object(x.a)(["\n  mutation($bank_account_id: ID!, $to: String!, $amount_in_words: String!, $transaction_amount: Float!, $transaction_date: Date!, $project: String!, \n    $payment_method:String!, $to_bank_account_id: ID, $reason: String, $cheque_number: String) {\n    createPayment(input: {bank_account_id: $bank_account_id, to: $to, amount_in_words: $amount_in_words, transaction_date: $transaction_date, \n      transaction_amount: $transaction_amount, to_bank_account_id: $to_bank_account_id, reason: $reason, project: $project, \n      payment_method: $payment_method, cheque_number: $cheque_number}) {\n        id\n        to\n    }\n  }\n"]))),j=Object(w.a)(m||(m=Object(x.a)(["\n  mutation($id: ID!, $bank_account_id: ID!, $to: String!, $amount_in_words: String!, $transaction_amount: Float!, $transaction_date: Date!, \n    $project: String!, $payment_method:String!, $to_bank_account_id: ID, $reason: String, $cheque_number: String) {\n    updatePayment(input: {id: $id, bank_account_id: $bank_account_id, to: $to, amount_in_words: $amount_in_words, transaction_date: $transaction_date,\n      transaction_amount: $transaction_amount, to_bank_account_id: $to_bank_account_id, project: $project, reason: $reason, \n      payment_method: $payment_method, cheque_number: $cheque_number}) {\n        id\n        to\n    }\n  }\n"]))),S=Object(w.a)(d||(d=Object(x.a)(["\n  mutation($id: ID!) {\n    deletePayment(id: $id) {\n        id\n        to\n    }   \n  }\n"]))),P=Object(w.a)(f||(f=Object(x.a)(["\n  mutation($id: ID!, $voided_reason: String!) {\n    voidPayment(input: {id: $id, voided_reason: $voided_reason}) {\n        id\n        to\n    }   \n  }\n"]))),C=Object(w.a)(_||(_=Object(x.a)(["\n  mutation($id: ID!) {\n    checkPayment(id: $id) {\n        id\n        to\n    }   \n  }\n"]))),D=Object(w.a)(h||(h=Object(x.a)(["\n  mutation($id: ID!) {\n    approvePayment(id: $id) {\n        id\n        to\n    }   \n  }\n"])));Object(w.a)(v||(v=Object(x.a)(["\n  mutation {\n    exportPayments {\n        status\n    }   \n  }\n"])))},611:function(t,e,n){var o=n(19)(!1);o.push([t.i,".container{width:100%;padding:12px;margin-right:auto;margin-left:auto}@media(min-width:960px){.container{max-width:900px}}@media(min-width:1264px){.container{max-width:1185px}}@media(min-width:1904px){.container{max-width:1785px}}.container--fluid{max-width:100%}.row{display:flex;flex-wrap:wrap;flex:1 1 auto;margin:-12px}.row+.row{margin-top:12px}.row+.row--dense{margin-top:4px}.row--dense{margin:-4px}.row--dense>.col,.row--dense>[class*=col-]{padding:4px}.row.no-gutters{margin:0}.row.no-gutters>.col,.row.no-gutters>[class*=col-]{padding:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{width:100%;padding:12px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-3{margin-left:25%}.v-application--is-rtl .offset-3{margin-right:25%}.v-application--is-ltr .offset-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-6{margin-left:50%}.v-application--is-rtl .offset-6{margin-right:50%}.v-application--is-ltr .offset-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-9{margin-left:75%}.v-application--is-rtl .offset-9{margin-right:75%}.v-application--is-ltr .offset-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-11{margin-right:91.6666666667%}@media(min-width:600px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-sm-0{margin-left:0}.v-application--is-rtl .offset-sm-0{margin-right:0}.v-application--is-ltr .offset-sm-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-sm-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-sm-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-sm-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-sm-3{margin-left:25%}.v-application--is-rtl .offset-sm-3{margin-right:25%}.v-application--is-ltr .offset-sm-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-sm-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-sm-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-sm-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-sm-6{margin-left:50%}.v-application--is-rtl .offset-sm-6{margin-right:50%}.v-application--is-ltr .offset-sm-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-sm-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-sm-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-sm-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-sm-9{margin-left:75%}.v-application--is-rtl .offset-sm-9{margin-right:75%}.v-application--is-ltr .offset-sm-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-sm-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-sm-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media(min-width:960px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-md-0{margin-left:0}.v-application--is-rtl .offset-md-0{margin-right:0}.v-application--is-ltr .offset-md-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-md-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-md-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-md-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-md-3{margin-left:25%}.v-application--is-rtl .offset-md-3{margin-right:25%}.v-application--is-ltr .offset-md-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-md-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-md-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-md-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-md-6{margin-left:50%}.v-application--is-rtl .offset-md-6{margin-right:50%}.v-application--is-ltr .offset-md-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-md-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-md-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-md-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-md-9{margin-left:75%}.v-application--is-rtl .offset-md-9{margin-right:75%}.v-application--is-ltr .offset-md-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-md-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-md-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media(min-width:1264px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-lg-0{margin-left:0}.v-application--is-rtl .offset-lg-0{margin-right:0}.v-application--is-ltr .offset-lg-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-lg-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-lg-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-lg-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-lg-3{margin-left:25%}.v-application--is-rtl .offset-lg-3{margin-right:25%}.v-application--is-ltr .offset-lg-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-lg-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-lg-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-lg-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-lg-6{margin-left:50%}.v-application--is-rtl .offset-lg-6{margin-right:50%}.v-application--is-ltr .offset-lg-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-lg-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-lg-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-lg-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-lg-9{margin-left:75%}.v-application--is-rtl .offset-lg-9{margin-right:75%}.v-application--is-ltr .offset-lg-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-lg-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-lg-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media(min-width:1904px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-xl-0{margin-left:0}.v-application--is-rtl .offset-xl-0{margin-right:0}.v-application--is-ltr .offset-xl-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-xl-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-xl-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-xl-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-xl-3{margin-left:25%}.v-application--is-rtl .offset-xl-3{margin-right:25%}.v-application--is-ltr .offset-xl-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-xl-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-xl-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-xl-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-xl-6{margin-left:50%}.v-application--is-rtl .offset-xl-6{margin-right:50%}.v-application--is-ltr .offset-xl-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-xl-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-xl-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-xl-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-xl-9{margin-left:75%}.v-application--is-rtl .offset-xl-9{margin-right:75%}.v-application--is-ltr .offset-xl-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-xl-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-xl-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-xl-11{margin-right:91.6666666667%}}",""]),t.exports=o},612:function(t,e,n){"use strict";n(602)},613:function(t,e,n){var o=n(19)(!1);o.push([t.i,".img{z-index:0!important}.check-dev{transform-origin:top left}@media print{.check-dev{transform-origin:top left;transform:rotate(-90deg) translateX(-100%);position:relative}}",""]),t.exports=o},614:function(t,e,n){"use strict";n.r(e);var o=n(174),l=n(636),c=n(189),r=n(639),m=(n(37),n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(1)),d=n(106),f=n(600);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:["check_image","payment","bankAccount"],data:function(){return{check_template_data:{name:{top:313,left:291},amount:{top:395,left:663},amount_in_words:{top:360,left:291},branch:{top:150,left:372},date:{top:268,left:665},dimension:{width:200,height:30}},top:0,left:0,position:"absolute"}},computed:{template:function(){var t;if(null!==(t=this.bankAccount)&&void 0!==t&&t.check_template_data){var e=JSON.parse(this.bankAccount.check_template_data);return e.dimension||(e.dimension={}),this.check_template_data=e,e}return this.check_template_data}},methods:h(h({},Object(d.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{updateBankAccountTemplate:function(){var t=this;this.$apollo.mutate({mutation:f.f,variables:{check_template_data:JSON.stringify(this.check_template_data),id:this.bankAccount.id}}).then((function(e){e.data;t.successNotification("Bank Account Template Updated Successfully!")})).catch((function(t){console.log(t)}))},calculatePosition:function(t){this.top=t.offsetY-5,this.left=t.offsetX}}),created:function(){},watch:{check_template_data:{handler:function(){this.$emit("on-template-data-change",this.check_template_data)},deep:!0}}},x=(n(612),n(79)),component=Object(x.a)(v,(function(){var t,e,n,m,d,f=this,_=f._self._c;return _("div",[_(r.a,{staticClass:"px-2 mb-5 no-print"},[_(l.a,{attrs:{cols:"12",md:"3"}},[_("fieldset",{staticClass:"px-2 pb-2"},[_("legend",[f._v("Name")]),f._v(" "),_(r.a,[_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.name.top,expression:"check_template_data.name.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:f.check_template_data.name.top},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.name,"top",t.target.value)}}})]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.name.left,expression:"check_template_data.name.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:f.check_template_data.name.left},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.name,"left",t.target.value)}}})])],1)],1)]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"3"}},[_("fieldset",{staticClass:"px-2 pb-2"},[_("legend",[f._v("Amount")]),f._v(" "),_(r.a,[_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.amount.top,expression:"check_template_data.amount.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:f.check_template_data.amount.top},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.amount,"top",t.target.value)}}})]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.amount.left,expression:"check_template_data.amount.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:f.check_template_data.amount.left},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.amount,"left",t.target.value)}}})])],1)],1)]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"3"}},[_("fieldset",{staticClass:"px-2 pb-2"},[_("legend",[f._v("Amount In Words")]),f._v(" "),_(r.a,[_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.amount_in_words.top,expression:"check_template_data.amount_in_words.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:f.check_template_data.amount_in_words.top},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.amount_in_words,"top",t.target.value)}}})]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.amount_in_words.left,expression:"check_template_data.amount_in_words.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:f.check_template_data.amount_in_words.left},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.amount_in_words,"left",t.target.value)}}})])],1)],1)]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"3"}},[_("fieldset",{staticClass:"px-2 pb-2"},[_("legend",[f._v("Branch")]),f._v(" "),_(r.a,[_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.branch.top,expression:"check_template_data.branch.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:f.check_template_data.branch.top},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.branch,"top",t.target.value)}}})]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.branch.left,expression:"check_template_data.branch.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:f.check_template_data.branch.left},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.branch,"left",t.target.value)}}})])],1)],1)]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"3"}},[_("fieldset",{staticClass:"px-2 pb-2"},[_("legend",[f._v("Date")]),f._v(" "),_(r.a,[_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.date.top,expression:"check_template_data.date.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:f.check_template_data.date.top},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.date,"top",t.target.value)}}})]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.date.left,expression:"check_template_data.date.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:f.check_template_data.date.left},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.date,"left",t.target.value)}}})])],1)],1)]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"3"}},[_("fieldset",{staticClass:"px-2 pb-2"},[_("legend",[f._v("Dimensions")]),f._v(" "),_(r.a,[_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.dimension.width,expression:"check_template_data.dimension.width"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Width"},domProps:{value:f.check_template_data.dimension.width},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.dimension,"width",t.target.value)}}})]),f._v(" "),_(l.a,{attrs:{cols:"12",md:"6"}},[_("input",{directives:[{name:"model",rawName:"v-model",value:f.check_template_data.dimension.height,expression:"check_template_data.dimension.height"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Height"},domProps:{value:f.check_template_data.dimension.height},on:{input:function(t){t.target.composing||f.$set(f.check_template_data.dimension,"height",t.target.value)}}})])],1)],1)]),f._v(" "),_(l.a,{staticClass:"mt-5"},[_("span",[f._v(" TOP: "+f._s(f.top)+" ")]),f._v(" "),_("span",{staticClass:"px-5"},[f._v("|")]),f._v(" "),_("span",[f._v(" LEFT: "+f._s(f.left)+" ")])])],1),f._v(" "),f.payment.id?_(o.a,{staticClass:"ml-5 light no-print",staticStyle:{float:"right"},attrs:{to:"/payment"},on:{click:f.updateBankAccountTemplate}},[_(c.a,{staticClass:"mr-2"},[f._v("mdi-arrow-left")]),f._v(" Get Back\n  ")],1):f._e(),f._v(" "),f.payment.id?_(o.a,{staticClass:"ml-5 blue-grey white--text no-print",staticStyle:{float:"right"},on:{click:f.updateBankAccountTemplate}},[_(c.a,{staticClass:"mr-2"},[f._v("mdi-check")]),f._v(" Save Changes\n  ")],1):f._e(),f._v(" "),_("div",{staticClass:"check-dev",on:{click:f.calculatePosition}},[_("span",{staticClass:"names white--black",staticStyle:{color:"black !important"},style:{position:f.position,top:f.template.name.top+"px",left:f.template.name.left+"px"},attrs:{color:""}},[f._v(f._s(null===(t=f.payment)||void 0===t?void 0:t.to))]),f._v(" "),_("span",{staticClass:"names",style:{position:f.position,width:f.template.dimension.width+"px",top:f.template.amount_in_words.top+"px",left:f.template.amount_in_words.left+"px",lineHeight:f.template.dimension.height+"px","text-transform":"uppercase"}},[f._v(f._s(null===(e=f.payment)||void 0===e?void 0:e.amount_in_words))]),f._v(" "),_("span",{staticClass:"names",style:{position:f.position,top:f.template.amount.top+"px",left:f.template.amount.left+"px"}},[f._v(f._s(f._f("number_format")(null===(n=f.payment)||void 0===n?void 0:n.transaction_amount)))]),f._v(" "),_("span",{staticClass:"names",style:{position:f.position,top:f.template.branch.top+"px",left:f.template.branch.left+"px"}},[f._v(f._s(null===(m=f.payment)||void 0===m?void 0:m.branch))]),f._v(" "),_("span",{staticClass:"names",style:{position:f.position,top:f.template.date.top+"px",left:f.template.date.left+"px"}},[f._v(f._s(null===(d=f.payment)||void 0===d?void 0:d.payment_date)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},636:function(t,e,n){"use strict";n(13),n(11),n(15),n(16);var o=n(1),l=(n(4),n(26),n(12),n(41),n(97),n(367),n(60),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(71),n(46),n(9),n(107),n(605),n(2)),c=n(80),r=n(0);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],_=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(r.G)(e)]={type:[String,Number],default:null},t}),{}),v=f.reduce((function(t,e){return t["order"+Object(r.G)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(_),offset:Object.keys(h),order:Object.keys(v)};function w(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var l=e.replace(t,"");o+="-".concat(l)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var k=new Map;e.a=l.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},_),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,l=e.children,r=(e.parent,"");for(var m in n)r+=String(n[m]);var d=k.get(r);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var o=n[t],l=w(e,t,o);l&&d.push(l)}));var l=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!l||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),k.set(r,d)}(),t(n.tag,Object(c.a)(data,{class:d}),l)}})},639:function(t,e,n){"use strict";n(13),n(11),n(15),n(16);var o=n(1),l=(n(4),n(46),n(69),n(34),n(12),n(41),n(97),n(367),n(60),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(71),n(9),n(605),n(2)),c=n(80),r=n(0);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],_=["start","end","center"];function h(t,e){return f.reduce((function(n,o){return n[t+Object(r.G)(o)]=e(),n}),{})}var v=function(t){return[].concat(_,["baseline","stretch"]).includes(t)},x=h("align",(function(){return{type:String,default:null,validator:v}})),w=function(t){return[].concat(_,["space-between","space-around"]).includes(t)},k=h("justify",(function(){return{type:String,default:null,validator:w}})),y=function(t){return[].concat(_,["space-between","space-around","stretch"]).includes(t)},$=h("alignContent",(function(){return{type:String,default:null,validator:y}})),O={align:Object.keys(x),justify:Object.keys(k),alignContent:Object.keys($)},j={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var o=j[t];if(null!=n){if(e){var l=e.replace(t,"");o+="-".concat(l)}return(o+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=l.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},x),{},{justify:{type:String,default:null,validator:w}},k),{},{alignContent:{type:String,default:null,validator:y}},$),render:function(t,e){var n=e.props,data=e.data,l=e.children,r="";for(var m in n)r+=String(n[m]);var d=P.get(r);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var o=n[t],l=S(e,t,o);l&&d.push(l)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(r,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),l)}})},689:function(t,e,n){var content=n(795);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2aee3476",content,!0,{sourceMap:!1})},794:function(t,e,n){"use strict";n(689)},795:function(t,e,n){var o=n(19)(!1);o.push([t.i,"*{font-size:.99em!important}",""]),t.exports=o},828:function(t,e,n){"use strict";n.r(e);var o=n(174),l=n(614),c=n(608),r={components:{CheckPrintForm:l.default},layout:"guest",data:function(){return{payment:{}}},apollo:{payment:{query:c.f,variables:function(){return{id:this.$route.params.id}},fetchPolicy:"cache-and-network"}},methods:{print:function(){window.print()},onTemplateDataChange:function(template){this.payment.bankAccount.check_template_data=JSON.stringify(template)}},watch:{}},m=(n(794),n(79)),component=Object(m.a)(r,(function(){var t,e=this,n=e._self._c;return n("div",[null!==(t=e.payment)&&void 0!==t&&t.bankAccount?n("check-print-form",{attrs:{payment:e.payment,bankAccount:e.payment.bankAccount,check_image:e.payment.bankAccount.check_image_url},on:{"on-template-data-change":e.onTemplateDataChange}}):e._e(),e._v(" "),n(o.a,{staticClass:"ml-auto black white--text no-print",staticStyle:{float:"right"},on:{click:e.print}},[e._v("Print")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);