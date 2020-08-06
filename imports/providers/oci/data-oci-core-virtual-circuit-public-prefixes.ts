// https://www.terraform.io/docs/providers/oci/r/data_oci_core_virtual_circuit_public_prefixes_a.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "verification_state": {
        "type": "string",
        "optional": true
      },
      "virtual_circuit_id": {
        "type": "string",
        "required": true
      },
      "virtual_circuit_public_prefixes": {
        "type": [
          "list",
          [
            "object",
            {
              "cidr_block": "string",
              "verification_state": "string"
            }
          ]
        ],
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreVirtualCircuitPublicPrefixesAConfig extends TerraformMetaArguments {
  readonly verificationState?: string;
  readonly virtualCircuitId: string;
  /** filter block */
  readonly filter?: DataOciCoreVirtualCircuitPublicPrefixesFilter[];
}
export class DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes extends ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // verification_state - computed: true, optional: false, required: true
  public get verificationState() {
    return this.getStringAttribute('verification_state');
  }
}
export interface DataOciCoreVirtualCircuitPublicPrefixesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVirtualCircuitPublicPrefixesA extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVirtualCircuitPublicPrefixesAConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_virtual_circuit_public_prefixes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._verificationState = config.verificationState;
    this._virtualCircuitId = config.virtualCircuitId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // verification_state - computed: false, optional: true, required: false
  private _verificationState?: string;
  public get verificationState() {
    return this._verificationState;
  }
  public set verificationState(value: string | undefined) {
    this._verificationState = value;
  }

  // virtual_circuit_id - computed: false, optional: false, required: true
  private _virtualCircuitId: string;
  public get virtualCircuitId() {
    return this._virtualCircuitId;
  }
  public set virtualCircuitId(value: string) {
    this._virtualCircuitId = value;
  }

  // virtual_circuit_public_prefixes - computed: true, optional: false, required: true
  public virtualCircuitPublicPrefixes(index: string) {
    return new DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes(this, 'virtual_circuit_public_prefixes', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreVirtualCircuitPublicPrefixesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVirtualCircuitPublicPrefixesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      verification_state: this._verificationState,
      virtual_circuit_id: this._virtualCircuitId,
      filter: this._filter,
    };
  }
}
