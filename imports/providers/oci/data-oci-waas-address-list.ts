// https://www.terraform.io/docs/providers/oci/r/data_oci_waas_address_list.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "address_count": {
        "type": "number",
        "computed": true
      },
      "address_list_id": {
        "type": "string",
        "required": true
      },
      "addresses": {
        "type": [
          "list",
          "string"
        ],
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
      "display_name": {
        "type": "string",
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
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
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

export interface DataOciWaasAddressListConfig extends TerraformMetaArguments {
  readonly addressListId: string;
}

// Resource

export class DataOciWaasAddressList extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciWaasAddressListConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_address_list',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressListId = config.addressListId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_count - computed: true, optional: false, required: true
  public get addressCount() {
    return this.getNumberAttribute('address_count');
  }

  // address_list_id - computed: false, optional: false, required: true
  private _addressListId: string;
  public get addressListId() {
    return this._addressListId;
  }
  public set addressListId(value: string) {
    this._addressListId = value;
  }

  // addresses - computed: true, optional: false, required: true
  public get addresses() {
    return this.getListAttribute('addresses');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      address_list_id: this._addressListId,
    };
  }
}
