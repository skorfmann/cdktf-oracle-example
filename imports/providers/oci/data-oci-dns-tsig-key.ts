// https://www.terraform.io/docs/providers/oci/r/data_oci_dns_tsig_key.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "algorithm": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "secret": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "self": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "tsig_key_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataOciDnsTsigKeyConfig extends TerraformMetaArguments {
  readonly tsigKeyId: string;
}

// Resource

export class DataOciDnsTsigKey extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDnsTsigKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_tsig_key',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tsigKeyId = config.tsigKeyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // self - computed: true, optional: false, required: true
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // tsig_key_id - computed: false, optional: false, required: true
  private _tsigKeyId: string;
  public get tsigKeyId() {
    return this._tsigKeyId;
  }
  public set tsigKeyId(value: string) {
    this._tsigKeyId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tsig_key_id: this._tsigKeyId,
    };
  }
}
