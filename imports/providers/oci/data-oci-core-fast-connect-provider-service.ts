// https://www.terraform.io/docs/providers/oci/r/data_oci_core_fast_connect_provider_service.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bandwith_shape_management": {
        "type": "string",
        "computed": true
      },
      "customer_asn_management": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "private_peering_bgp_management": {
        "type": "string",
        "computed": true
      },
      "provider_name": {
        "type": "string",
        "computed": true
      },
      "provider_service_id": {
        "type": "string",
        "required": true
      },
      "provider_service_key_management": {
        "type": "string",
        "computed": true
      },
      "provider_service_name": {
        "type": "string",
        "computed": true
      },
      "public_peering_bgp_management": {
        "type": "string",
        "computed": true
      },
      "required_total_cross_connects": {
        "type": "number",
        "computed": true
      },
      "supported_virtual_circuit_types": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "type": {
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

// Configuration

export interface DataOciCoreFastConnectProviderServiceConfig extends TerraformMetaArguments {
  readonly providerServiceId: string;
}

// Resource

export class DataOciCoreFastConnectProviderService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreFastConnectProviderServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_fast_connect_provider_service',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._providerServiceId = config.providerServiceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwith_shape_management - computed: true, optional: false, required: true
  public get bandwithShapeManagement() {
    return this.getStringAttribute('bandwith_shape_management');
  }

  // customer_asn_management - computed: true, optional: false, required: true
  public get customerAsnManagement() {
    return this.getStringAttribute('customer_asn_management');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // private_peering_bgp_management - computed: true, optional: false, required: true
  public get privatePeeringBgpManagement() {
    return this.getStringAttribute('private_peering_bgp_management');
  }

  // provider_name - computed: true, optional: false, required: true
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // provider_service_id - computed: false, optional: false, required: true
  private _providerServiceId: string;
  public get providerServiceId() {
    return this._providerServiceId;
  }
  public set providerServiceId(value: string) {
    this._providerServiceId = value;
  }

  // provider_service_key_management - computed: true, optional: false, required: true
  public get providerServiceKeyManagement() {
    return this.getStringAttribute('provider_service_key_management');
  }

  // provider_service_name - computed: true, optional: false, required: true
  public get providerServiceName() {
    return this.getStringAttribute('provider_service_name');
  }

  // public_peering_bgp_management - computed: true, optional: false, required: true
  public get publicPeeringBgpManagement() {
    return this.getStringAttribute('public_peering_bgp_management');
  }

  // required_total_cross_connects - computed: true, optional: false, required: true
  public get requiredTotalCrossConnects() {
    return this.getNumberAttribute('required_total_cross_connects');
  }

  // supported_virtual_circuit_types - computed: true, optional: false, required: true
  public get supportedVirtualCircuitTypes() {
    return this.getListAttribute('supported_virtual_circuit_types');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      provider_service_id: this._providerServiceId,
    };
  }
}
