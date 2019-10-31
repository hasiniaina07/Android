<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization,X-Requested-With');
    header('Content-Type: application/json; charset=utf-8');

    include "library/config.php";

    $postjson = json_decode(file_get_contents('php://input'), true);

//ALL USER 

    //RH
        //Add

        if($postjson['action'] == 'add_rh'){
            $data = array();
            $query = mysqli_query($mysqli, "SELECT * FROM ressource WHERE cin_rh='$postjson[cin_rh]'");
            $check = mysqli_num_rows($query);
            if($check == NULL){
                $data = array();
                $nquery = mysqli_query($mysqli, "INSERT INTO ressource SET
                nom_rh = '$postjson[nom_rh]',
                cin_rh = '$postjson[cin_rh]',
                naiss_rh = '$postjson[naiss_rh]',
                adr_rh = '$postjson[adr_rh]',
                tel_rh = '$postjson[tel_rh]',
                occup_rh = '$postjson[occup_rh]',
                pass_rh = '$postjson[pass_rh]'
            ");

            $idadd = mysqli_insert_id($mysqli);

            if($nquery) $result = json_encode(array('success'=>true, 'idadd'=>$idadd));
            else $result = json_encode(array('success'=>false));
            echo $result;
            }
            else{
                $result = json_encode(array('success'=>false));
            }
            echo $result;
        }
            

        //Lister

        elseif($postjson['action']== 'list_rh'){
            $data = array();
            $query = mysqli_query($mysqli, "SELECT * FROM ressource ORDER BY id_rh DESC");

            while($row = mysqli_fetch_array($query)){

                $data[] = array(
                    'id_rh'    => $row['id_rh'],
                    'nom_rh'   => $row['nom_rh'],
                    'cin_rh'   => $row['cin_rh'],
                    'naiss_rh' => $row['naiss_rh'],
                    'adr_rh'   => $row['adr_rh'],
                    'tel_rh'   => $row['tel_rh'],
                    'occup_rh' => $row['occup_rh']
                );
            }

            if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
            else $result = json_encode(array('success'=>false));
            echo $result;
        }

        //Fiche

        elseif($postjson['action'] == 'fiche_rh'){
            $data = array();
            $query = mysqli_query($mysqli, "SELECT * FROM ressource WHERE id_rh='$postjson[id_rh]'");

            while($row = mysqli_fetch_array($query)){

                $data[] = array(
                'nom_rh'   => $row['nom_rh'],
                'cin_rh'   => $row['cin_rh'],
                'naiss_rh' => $row['naiss_rh'],
                'adr_rh'   => $row['adr_rh'],
                'tel_rh'   => $row['tel_rh'],
                'occup_rh' => $row['occup_rh']
                );
            }

            if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
            else $result = json_encode(array('success'=>false));
            echo $result;
        }

        //Update

        elseif($postjson['action'] == 'update_rh'){
            $query = mysqli_query($mysqli, "SELECT * FROM ressource WHERE cin_rh='$postjson[cin_rh]'");
            $check = mysqli_num_rows($query);
            if($check == NULL){
                $nquery = mysqli_query($mysqli, "UPDATE ressource SET
                        nom_rh   = '$postjson[nom_rh]',
                        cin_rh   = '$postjson[cin_rh]',
                        naiss_rh = '$postjson[naiss_rh]',
                        adr_rh   = '$postjson[adr_rh]',
                        tel_rh   = '$postjson[tel_rh]',
                        occup_rh = '$postjson[occup_rh]' WHERE id_rh='$postjson[id_rh]'
            ");

            if($nquery) $result = json_encode(array('success'=>true));
            else $result = json_encode(array('success'=>false));
            echo $result;
            }
            else{
                $result = json_encode(array('success'=>false));
            }
            echo $result;
        }

        //Delete

        elseif($postjson['action'] == 'del_rh'){
            $query = mysqli_query($mysqli, "DELETE FROM ressource WHERE id_rh = '$postjson[id_rh]'");

            if($query) $result = json_encode(array('success'=>true));
            else $result = json_encode(array('success'=>false));
            echo $result;
        }

        //Login

        elseif($postjson['action'] == 'login_rh'){
            $data = array();
            $query = mysqli_query($mysqli, "SELECT * FROM ressource WHERE nom_rh='$postjson[nom_rh]' AND pass_rh='$postjson[pass_rh]'");
            $check = mysqli_num_rows($query);

            if($check>0){
                $data = mysqli_fetch_array($query);
                $datarh = array(
                    'id_rh'    => $data['id_rh'],
                    'nom_rh'   => $data['nom_rh'],
                    'cin_rh'   => $data['cin_rh'],
                    'naiss_rh' => $data['naiss_rh'],
                    'adr_rh'   => $data['adr_rh'],
                    'tel_rh'   => $data['tel_rh'],
                    'occup_rh' => $data['occup_rh'],
                    'pass_rh'  => $data['pass_rh']
                );

            if($query) $result = json_encode(array('success'=>true, 'result'=>$datarh));
            else $result = json_encode(array('success'=>false));
            }else{
                $result = json_encode(array('success'=>false));
            }
            echo $result;
        }

        //Profil

        elseif($postjson['action']== 'profil_rh'){
            $profile = array();
            $query = mysqli_fetch_array(mysqli_query($mysqli, "SELECT * FROM ressource WHERE id_rh='$postjson[id_rh]'"));

                $profile[] = array(
                    'id_rh'    => $query['id_rh'],
                    'nom_rh'   => $query['nom_rh'],
                    'cin_rh'   => $query['cin_rh'],
                    'naiss_rh' => $query['naiss_rh'],
                    'adr_rh'   => $query['adr_rh'],
                    'tel_rh'   => $query['tel_rh'],
                    'occup_rh' => $query['occup_rh'],
                    'pass_rh'  => $query['pass_rh']
                );

            if($query) $result = json_encode(array('success'=>true, 'profiles'=>$profile));
            else $result = json_encode(array('success'=>false));
            echo $result;
        }


    //ENSEIGNANT

        //Add

        if($postjson['action'] == 'Add_ens'){
            $data = array();
            $query = mysqli_query($mysqli, "SELECT * FROM enseignant WHERE cin_ens='$postjson[cin_ens]'");
            $check = mysqli_num_rows($query);
            if($check == NULL){
                $nquery = mysqli_query($mysqli, "INSERT INTO enseignant SET
                nom_ens = '$postjson[nom_ens]',
                naiss_ens = '$postjson[naiss_ens]', 
                cin_ens = '$postjson[cin_ens]',
                adr_ens = '$postjson[adr_ens]',
                tel_ens = '$postjson[tel_ens]',
                occup_ens = '$postjson[occup_ens]',
                pass_ens = '$postjson[pass_ens]'
            ");
      
            $idadd = mysqli_insert_id($mysqli);
        
            if($nquery) $result = json_encode(array('success'=>true, 'idadd'=>$idadd));
            else $result = json_encode(array('success'=>false));
            echo $result;
            }
            else{
                $result = json_encode(array('success'=>false));
            }
            echo $result;
        }

        //Lister

        elseif($postjson['action'] == 'list_ens'){
            $data = array();
            $query = mysqli_query($mysqli, "SELECT * FROM enseignant ORDER BY id_ens DESC");

            while($row = mysqli_fetch_array($query)){

                $data[] = array(
                    'id_ens'    => $row['id_ens'],
                    'nom_ens'   => $row['nom_ens'],
                    'naiss_ens' => $row['naiss_ens'],
                    'cin_ens'   => $row['cin_ens'],
                    'adr_ens'   => $row['adr_ens'],
                    'tel_ens'   => $row['tel_ens'],
                    'occup_ens' => $row['occup_ens']
                );
            }

            if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
            else $result = json_encode(array('success'=>false));
            echo $result;
        }

        //Fiche

        elseif($postjson['action'] == 'fiche_ens'){
            $data = array();
            $query = mysqli_query($mysqli, "SELECT * FROM enseignant WHERE id_ens='$postjson[id_ens]'");
        
            while($row = mysqli_fetch_array($query)){
        
                $data[] = array(
                  'nom_ens'   => $row['nom_ens'],
                  'naiss_ens' => $row['naiss_ens'],
                  'cin_ens'   => $row['cin_ens'],
                  'adr_ens'   => $row['adr_ens'],
                  'tel_ens'   => $row['tel_ens'],
                  'occup_ens' => $row['occup_ens'],
                );
            }
        
            if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
            else $result = json_encode(array('success'=>false));
            echo $result;
        }

        //Update

        elseif($postjson['action'] == 'update_ens'){
            $query = mysqli_query($mysqli, "SELECT * FROM enseignant WHERE cin_ens='$postjson[cin_ens]'");
            $check = mysqli_num_rows($query);
            if($check == NULL){
                $nquery = mysqli_query($mysqli, "UPDATE enseignant SET
                nom_ens   = '$postjson[nom_ens]',
                naiss_ens = '$postjson[naiss_ens]', 
                cin_ens   = '$postjson[cin_ens]',
                adr_ens   = '$postjson[adr_ens]',
                tel_ens   = '$postjson[tel_ens]',
                occup_ens = '$postjson[occup_ens]' WHERE id_ens='$postjson[id_ens]'
            ");
        
            if($nquery) $result = json_encode(array('success'=>true));
            else $result = json_encode(array('success'=>false));
            echo $result;
            }
            else{
                $result = json_encode(array('success'=>false));
            }
            echo $result;          
        }

        //Delete

        elseif($postjson['action'] == 'del_ens'){
            $query = mysqli_query($mysqli, "DELETE FROM enseignant WHERE id_ens = '$postjson[id_ens]'");
        
            if($query) $result = json_encode(array('success'=>true));
            else $result = json_encode(array('success'=>false));
            echo $result;
        }

        //Login

        elseif($postjson['action'] == 'login_ens'){
            $data = array();
            $query = mysqli_query($mysqli, "SELECT * FROM enseignant WHERE nom_ens='$postjson[nom_ens]' AND pass_ens='$postjson[pass_ens]'");
            $check = mysqli_num_rows($query);
        
            if($check>0){
                $data = mysqli_fetch_array($query);
                $dataens = array(
                  'id_ens'    => $data['id_ens'],
                  'nom_ens'   => $data['nom_ens'],
                  'naiss_ens' => $data['naiss_ens'],
                  'cin_ens'   => $data['cin_ens'],
                  'adr_ens'   => $data['adr_ens'],
                  'tel_ens'   => $data['tel_ens'],
                  'occup_ens' => $data['occup_ens'],
                  'pass_ens'  => $data['pass_ens']
                );
        
                if($query) $result = json_encode(array('success'=>true, 'result'=>$dataens));
                else $result = json_encode(array('success'=>false));
            }else{
                $result = json_encode(array('success'=>false));
            }
            echo $result;
        }

        //Profil

        elseif($postjson['action'] == 'profil_ens'){
            $profile = array();
            $query = mysqli_fetch_array(mysqli_query($mysqli, "SELECT * FROM enseignant WHERE id_ens='$postjson[id_ens]'"));
        
            $profile[] = array(
                'id_ens'    => $query['id_ens'],
                'nom_ens'   => $query['nom_ens'],
                'naiss_ens' => $query['naiss_ens'],
                'cin_ens'   => $query['cin_ens'],
                'adr_ens'   => $query['adr_ens'],
                'tel_ens'   => $query['tel_ens'],
                'occup_ens' => $query['occup_ens'],
                'pass_ens'  => $query['pass_ens']
            );
        
            if($query) $result = json_encode(array('success'=>true, 'profiles'=>$profile));
            else $result = json_encode(array('success'=>false));
            echo $result;
        }

