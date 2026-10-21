if(location.search.indexOf('sent=1')>-1){document.getElementById('formOk').style.display='block';document.getElementById('formDemo').style.display='block';if(window.m5track)m5track('lead_submit_confirmed');}
    var MAIN_SID=null;
    function mainSubmit(e){e.preventDefault();var f=e.target,btn=f.querySelector('button[type=submit]');
      if(f._honey&&f._honey.value)return false;
      var name=f.name.value.trim(),phone=f.phone.value.trim(),details=(f.neighborhood.value+' '+f.budget.value).trim();
      btn.disabled=true;btn.style.opacity='.6';document.getElementById('formErr').style.display='none';
      MAIN_SID=MAIN_SID||m5uuid();
      m5lead({submission_id:MAIN_SID,intent:'lead',name:name,phone:phone,details:details,lang:(document.documentElement.lang||'en').slice(0,2),service:'renovation',form_source:'main-form'}).then(function(r){
        btn.disabled=false;btn.style.opacity='';
        if(!r.ok){document.getElementById('formErr').style.display='block';if(window.m5track)m5track('lead_submit_failed',{status:r.status});return;}
        MAIN_SID=null;
        try{fetch(f.action.replace('formsubmit.co/','formsubmit.co/ajax/'),{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:name,phone:phone,neighborhood:f.neighborhood.value,budget:f.budget.value,source:'main-form',lead_id:r.lead_id,_cc:'vlad@m5miami.com,vadim@m5miami.com',_subject:'New lead — m5miami.com',_template:'table',_captcha:'false'})}).catch(function(){})}catch(_){}
        if(window.m5hook)m5hook({type:'lead',name:name,phone:phone,details:details,source:'main-form',lead_id:r.lead_id});
        if(window.m5track){m5track('lead_submit');if(r.created)m5track('lead_submit_confirmed',{lead_id:r.lead_id});}
        f.reset();document.getElementById('formOk').style.display='block';document.getElementById('formDemo').style.display='block';
      });
      return false;}