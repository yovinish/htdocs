<?php
include("include/header.php");
if(!empty($_POST)){
  print_r($_POST);
}
?>

<form class="" action="index.html" method="#">
  <div>
    <label for="test">Votre message :</label><br/><textarea row="10" cols="80" name="test"></textarea><br/>
    <input type="submit" value="Envoyer"/><input type="reset" value="Annuler"/>
  </div>
</form>

<?php
  include("include/footer.php");
?>
