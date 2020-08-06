// https://www.terraform.io/docs/providers/oci/r/data_oci_dataflow_private_endpoint.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
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
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "dns_zones": {
        "type": [
          "list",
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
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "max_host_count": {
        "type": "number",
        "computed": true
      },
      "nsg_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "owner_principal_id": {
        "type": "string",
        "computed": true
      },
      "owner_user_name": {
        "type": "string",
        "computed": true
      },
      "private_endpoint_id": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
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

export interface DataOciDataflowPrivateEndpointConfig extends TerraformMetaArguments {
  readonly privateEndpointId: string;
}

// Resource

export class DataOciDataflowPrivateEndpoint extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDataflowPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._privateEndpointId = config.privateEndpointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_zones - computed: true, optional: false, required: true
  public get dnsZones() {
    return this.getListAttribute('dns_zones');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_host_count - computed: true, optional: false, required: true
  public get maxHostCount() {
    return this.getNumberAttribute('max_host_count');
  }

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // owner_principal_id - computed: true, optional: false, required: true
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }

  // owner_user_name - computed: true, optional: false, required: true
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // private_endpoint_id - computed: false, optional: false, required: true
  private _privateEndpointId: string;
  public get privateEndpointId() {
    return this._privateEndpointId;
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      private_endpoint_id: this._privateEndpointId,
    };
  }
}
