// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_exadata_infrastructure_shapes.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_exadata_infrastructure_shapes": {
        "type": [
          "list",
          [
            "object",
            {
              "available_core_count": "number",
              "core_count_increment": "number",
              "maximum_node_count": "number",
              "minimum_core_count": "number",
              "minimum_node_count": "number",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "availability_domain": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
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

export interface DataOciDatabaseAutonomousExadataInfrastructureShapesConfig extends TerraformMetaArguments {
  readonly availabilityDomain: string;
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciDatabaseAutonomousExadataInfrastructureShapesFilter[];
}
export class DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes extends ComplexComputedList {

  // available_core_count - computed: true, optional: false, required: true
  public get availableCoreCount() {
    return this.getNumberAttribute('available_core_count');
  }

  // core_count_increment - computed: true, optional: false, required: true
  public get coreCountIncrement() {
    return this.getNumberAttribute('core_count_increment');
  }

  // maximum_node_count - computed: true, optional: false, required: true
  public get maximumNodeCount() {
    return this.getNumberAttribute('maximum_node_count');
  }

  // minimum_core_count - computed: true, optional: false, required: true
  public get minimumCoreCount() {
    return this.getNumberAttribute('minimum_core_count');
  }

  // minimum_node_count - computed: true, optional: false, required: true
  public get minimumNodeCount() {
    return this.getNumberAttribute('minimum_node_count');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOciDatabaseAutonomousExadataInfrastructureShapesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseAutonomousExadataInfrastructureShapes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousExadataInfrastructureShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_exadata_infrastructure_shapes',
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
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_exadata_infrastructure_shapes - computed: true, optional: false, required: true
  public autonomousExadataInfrastructureShapes(index: string) {
    return new DataOciDatabaseAutonomousExadataInfrastructureShapesAutonomousExadataInfrastructureShapes(this, 'autonomous_exadata_infrastructure_shapes', index);
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string) {
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseAutonomousExadataInfrastructureShapesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseAutonomousExadataInfrastructureShapesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      filter: this._filter,
    };
  }
}
