// https://www.terraform.io/docs/providers/oci/r/data_oci_core_fast_connect_provider_service_key.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bandwidth_shape_name": {
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
      "peering_location": {
        "type": "string",
        "computed": true
      },
      "provider_service_id": {
        "type": "string",
        "required": true
      },
      "provider_service_key_name": {
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

// Configuration

export interface DataOciCoreFastConnectProviderServiceKeyConfig extends TerraformMetaArguments {
  readonly providerServiceId: string;
  readonly providerServiceKeyName: string;
}

// Resource

export class DataOciCoreFastConnectProviderServiceKey extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreFastConnectProviderServiceKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_fast_connect_provider_service_key',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._providerServiceId = config.providerServiceId;
    this._providerServiceKeyName = config.providerServiceKeyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_shape_name - computed: true, optional: false, required: true
  public get bandwidthShapeName() {
    return this.getStringAttribute('bandwidth_shape_name');
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

  // peering_location - computed: true, optional: false, required: true
  public get peeringLocation() {
    return this.getStringAttribute('peering_location');
  }

  // provider_service_id - computed: false, optional: false, required: true
  private _providerServiceId: string;
  public get providerServiceId() {
    return this._providerServiceId;
  }
  public set providerServiceId(value: string) {
    this._providerServiceId = value;
  }

  // provider_service_key_name - computed: false, optional: false, required: true
  private _providerServiceKeyName: string;
  public get providerServiceKeyName() {
    return this._providerServiceKeyName;
  }
  public set providerServiceKeyName(value: string) {
    this._providerServiceKeyName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      provider_service_id: this._providerServiceId,
      provider_service_key_name: this._providerServiceKeyName,
    };
  }
}
