// https://www.terraform.io/docs/providers/oci/r/data_oci_limits_limit_values.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "limit_values": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "name": "string",
              "scope_type": "string",
              "value": "string"
            }
          ]
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "scope_type": {
        "type": "string",
        "optional": true
      },
      "service_name": {
        "type": "string",
        "required": true
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

export interface DataOciLimitsLimitValuesConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly name?: string;
  readonly scopeType?: string;
  readonly serviceName: string;
  /** filter block */
  readonly filter?: DataOciLimitsLimitValuesFilter[];
}
export class DataOciLimitsLimitValuesLimitValues extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // scope_type - computed: true, optional: false, required: true
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataOciLimitsLimitValuesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciLimitsLimitValues extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLimitsLimitValuesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_limits_limit_values',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._name = config.name;
    this._scopeType = config.scopeType;
    this._serviceName = config.serviceName;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string | undefined) {
    this._availabilityDomain = value;
  }

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

  // limit_values - computed: true, optional: false, required: true
  public limitValues(index: string) {
    return new DataOciLimitsLimitValuesLimitValues(this, 'limit_values', index);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // scope_type - computed: false, optional: true, required: false
  private _scopeType?: string;
  public get scopeType() {
    return this._scopeType;
  }
  public set scopeType(value: string | undefined) {
    this._scopeType = value;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this._serviceName;
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciLimitsLimitValuesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciLimitsLimitValuesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      name: this._name,
      scope_type: this._scopeType,
      service_name: this._serviceName,
      filter: this._filter,
    };
  }
}
