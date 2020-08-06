// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_tenancy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "description": {
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
      "home_region_key": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "tenancy_id": {
        "type": "string",
        "required": true
      },
      "upi_idcs_compatibility_layer_endpoint": {
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

export interface DataOciIdentityTenancyConfig extends TerraformMetaArguments {
  readonly tenancyId: string;
}

// Resource

export class DataOciIdentityTenancy extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityTenancyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_tenancy',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._tenancyId = config.tenancyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // home_region_key - computed: true, optional: false, required: true
  public get homeRegionKey() {
    return this.getStringAttribute('home_region_key');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // tenancy_id - computed: false, optional: false, required: true
  private _tenancyId: string;
  public get tenancyId() {
    return this._tenancyId;
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }

  // upi_idcs_compatibility_layer_endpoint - computed: true, optional: false, required: true
  public get upiIdcsCompatibilityLayerEndpoint() {
    return this.getStringAttribute('upi_idcs_compatibility_layer_endpoint');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tenancy_id: this._tenancyId,
    };
  }
}
