function ejecuta () {
    nom=document.f_mail.nom.value;
    ap=document.f_mail.ap.value;
    am=document.f_mail.am.value;
    fec=document.f_mail.fec.value;
    
    if (nom.length==0) {
        document.f_mail.nom.style.background="red";
        alert("Error, se debe de poner un nombre obligatoriamente");
    } else { 
        nom=nom.toLowerCase();
        nom=nom.replace('á','a'); nom=nom.replace('é','e'); nom=nom.replace('í','i'); nom=nom.replace('ó','o'); nom=nom.replace('ö','o'); nom=nom.replace('ú','u'); nom=nom.replace('ü','u'); nom=nom.replace('ñ','n'); 
        nom=nom.replace(' ','_');
;        if (ap.length==0) {
            document.f_mail.ap.style.background="red";
            alert("Error, se debe de poner un apellido paterno obligatoriamente");
        } else {
            ap=ap.toLowerCase();
            ap=ap.replace('á','a'); ap=ap.replace('é', 'e'); ap=ap.replace('í','i'); ap=ap.replace('ó','o'); ap=ap.replace('ö','o'); ap=ap.replace('ú','u'); ap=ap.replace('ü','u'); ap=ap.replace('ñ','n');
            ap=ap.replace(' ','_'); ap=ap.replace(' ','_');
            if (am.length==0) {
                document.f_mail.am.style.background="red";
                alert("Error, se debe de poner un apellido materno obligatoriamente");
            } else {
                am=am.toLowerCase();
                am=am.replace('á','a'); am=am.replace('é', 'e'); am=am.replace('í','i'); am=am.replace('ó','o'); am=am.replace('ö','o'); am=am.replace('ú','u'); am=am.replace('ü','u'); am=am.replace('ñ','n');
                am=am.replace(' ','_');
                if (fec.length==0) {
                    document.f_mail.fec.style.background="red";
                    alert("Error, se debe de poner una fecha de nacimiento obligatoriamente");
                } else { 
                    anio=fec.substr(2,2);
                    mes=fec.substr(5,2);
	                dia=fec.substr(8,2);

                    mail=nom.charAt(0)+ap+am.charAt(0)+"@empresa.com.mex";
                    contrasenia=dia+mes+anio;
                }
            }
        }
    }
    document.f_mail.correo.value=mail;
    document.f_mail.contra.value=contrasenia;
}
