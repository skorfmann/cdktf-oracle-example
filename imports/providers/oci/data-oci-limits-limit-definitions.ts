// https://www.terraform.io/docs/providers/oci/r/data_oci_limits_limit_definitions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "limit_definitions": {
        "type": [
          "list",
          [
            "object",
            {
              "are_quotas_supported": "bool",
              "description": "string",
              "is_resource_availability_supported": "bool",
              "name": "string",
              "scope_type": "string",
              "service_name": "string"
            }
          ]
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "service_name": {
        "type": "string",
        "optional": true
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

export interface DataOciLimitsLimitDefinitionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly name?: string;
  readonly serviceName?: string;
  /** filter block */
  readonly filter?: DataOciLimitsLimitDefinitionsFilter[];
}
export class DataOciLimitsLimitDefinitionsLimitDefinitions extends ComplexComputedList {

  // are_quotas_supported - computed: true, optional: false, required: true
  public get areQuotasSupported() {
    return this.getBooleanAttribute('are_quotas_supported');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_resource_availability_supported - computed: true, optional: false, required: true
  public get isResourceAvailabilitySupported() {
    return this.getBooleanAttribute('is_resource_availability_supported');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // scope_type - computed: true, optional: false, required: true
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }

  // service_name - computed: true, optional: false, required: true
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}
export interface DataOciLimitsLimitDefinitionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciLimitsLimitDefinitions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLimitsLimitDefinitionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_limits_limit_definitions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._name = config.name;
    this._serviceName = config.serviceName;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // limit_definitions - computed: true, optional: false, required: true
  public limitDefinitions(index: string) {
    return new DataOciLimitsLimitDefinitionsLimitDefinitions(this, 'limit_definitions', index);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string;
  public get serviceName() {
    return this._serviceName;
  }
  public set serviceName(value: string | undefined) {
    this._serviceName = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciLimitsLimitDefinitionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciLimitsLimitDefinitionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      name: this._name,
      service_name: this._serviceName,
      filter: this._filter,
    };
  }
}
