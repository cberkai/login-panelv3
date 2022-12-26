import React from "react";
import { TextInput, Button, Grid } from "@mantine/core";
import { IconAt } from "@tabler/icons";
import "../styles/Signup.css";

function Signup() {
  return (
    <div class="signupform">
      <Grid class="signupdesc1">
        <Grid.Col md={12} lg={12}>
          <h1>Abonelik Ön Başvuru Formu</h1>
        </Grid.Col>
      </Grid>
      <div class="application">
        <Grid>
          <Grid.Col md={6} lg={6} span={6}>
            <TextInput placeholder="Ad" label="Adınız" withAsterisk />
          </Grid.Col>
          <Grid.Col md={6} lg={6} span={6}>
            <TextInput placeholder="Soyad" label="Soyadınız" withAsterisk />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col md={6} lg={6} span={12}>
            {" "}
            <TextInput
              label="Email"
              placeholder="Email"
              icon={<IconAt size={14} />}
              withAsterisk
            />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col md={6} lg={6} span={6}>
            <TextInput placeholder="İl" label="İl" withAsterisk />
          </Grid.Col>
          <Grid.Col md={6} lg={6} span={6}>
            <TextInput placeholder="İlçe" label="İlçe" withAsterisk />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col md={6} lg={6} span={12}>
            <TextInput
              placeholder="Mahalle/Köy"
              label="Mahalle/Köy"
              withAsterisk
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col md={6} lg={6} span={12}>
            <TextInput
              placeholder="Sokak/Cadde"
              label="Sokak/Cadde"
              withAsterisk
            />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col md={6} lg={6} span={12}>
            {" "}
            <TextInput placeholder="Daire" label="Daire" withAsterisk />
          </Grid.Col>
          <Grid.Col md={6} lg={6} span={12}>
            {" "}
            <TextInput placeholder="No" label="No" withAsterisk />
          </Grid.Col>
        </Grid>
        <br />
        <div class="forgotpsw">
          <a href="/">Bizimle iletişime geç</a>
        </div>

        <Grid>
          <Grid.Col md={6} lg={6} span={12} offset={7}>
            <Button color="dark" radius="xs" uppercase>
              GÖNDER
            </Button>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
}

export default Signup;
